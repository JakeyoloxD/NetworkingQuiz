/* Subnetting Drill — VLSM generator + grader
   Pure math is isolated so it can be unit-tested in node.
   UI hooks live below the CORE section and only touch the DOM when called.
*/

/* ===================== CORE (pure, testable) ===================== */

function ipToInt(ip) {
  const p = ip.split(".").map(Number);
  return p[0] * 16777216 + p[1] * 65536 + p[2] * 256 + p[3];
}
function intToIp(n) {
  return [
    Math.floor(n / 16777216) % 256,
    Math.floor(n / 65536) % 256,
    Math.floor(n / 256) % 256,
    n % 256,
  ].join(".");
}
function prefixToMask(p) {
  if (p <= 0) return "0.0.0.0";
  const m = (0xffffffff << (32 - p)) >>> 0;
  return intToIp(m);
}
// smallest h where 2^h - 2 >= hosts (classic usable-host rule, min /30)
function hostBitsForHosts(hosts) {
  const need = Math.max(1, hosts);
  let h = 1;
  while (Math.pow(2, h) - 2 < need) h++;
  return h;
}
function nextPow2(n) {
  let p = 1;
  while (p < n) p *= 2;
  return p;
}

// Allocate requirements over a base block, largest-first (standard VLSM).
// requirements: [{label, hosts}]  -> [{label, hosts, h, prefix, block, mask,
//   network, firstHost, lastHost, broadcast, usable}]
function allocate(baseIp, basePrefix, requirements) {
  const sorted = [...requirements].sort((a, b) => b.hosts - a.hosts);
  let ptr = ipToInt(baseIp);
  const baseEnd = ptr + Math.pow(2, 32 - basePrefix) - 1;
  const out = [];
  for (const req of sorted) {
    const h = hostBitsForHosts(req.hosts);
    const block = Math.pow(2, h);
    const prefix = 32 - h;
    const network = ptr;
    const broadcast = ptr + block - 1;
    if (broadcast > baseEnd) throw new Error("does not fit in base block");
    out.push({
      label: req.label,
      hosts: req.hosts,
      h,
      prefix,
      block,
      mask: prefixToMask(prefix),
      network: intToIp(network),
      firstHost: intToIp(network + 1),
      lastHost: intToIp(broadcast - 1),
      broadcast: intToIp(broadcast),
      usable: block - 2,
    });
    ptr = broadcast + 1;
  }
  return out;
}

function randInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Generate a random, always-solvable VLSM problem.
function genProblem() {
  const n = randInt(3, 5);
  const lanNames = [
    "HQ", "Branch", "Sales", "Engineering", "Warehouse",
    "Lab", "Guest", "Mgmt", "Voice", "Servers", "Finance", "Support",
  ];
  const names = [...lanNames].sort(() => Math.random() - 0.5);

  const reqs = [];
  for (let i = 0; i < n - 1; i++) {
    const bucket = randInt(1, 3);
    let hosts;
    if (bucket === 1) hosts = randInt(500, 3000);     // large LAN
    else if (bucket === 2) hosts = randInt(60, 500);  // medium LAN
    else hosts = randInt(10, 60);                      // small LAN
    reqs.push({ label: names[i], hosts });
  }
  // always include at least one point-to-point WAN link
  reqs.push({ label: "WAN-Link", hosts: 2 });

  const blocks = reqs.map((r) => Math.pow(2, hostBitsForHosts(r.hosts)));
  const sum = blocks.reduce((a, b) => a + b, 0);
  const largest = Math.max(...blocks);
  const baseBlock = Math.max(nextPow2(sum), largest);
  const basePrefix = 32 - Math.log2(baseBlock);

  // random aligned base, first octet kept in a normal-looking range
  const maxStart = Math.pow(2, 32) - baseBlock;
  const lowStart = 11 * 16777216; // 11.0.0.0
  const highStart = Math.min(maxStart, 199 * 16777216);
  const slots = Math.floor((highStart - lowStart) / baseBlock);
  const baseInt = lowStart + randInt(0, slots) * baseBlock;

  return {
    baseIp: intToIp(baseInt),
    basePrefix,
    requirements: reqs,
    solution: allocate(intToIp(baseInt), basePrefix, reqs),
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    ipToInt, intToIp, prefixToMask, hostBitsForHosts,
    nextPow2, allocate, genProblem,
  };
}

/* ===================== UI ===================== */

const sub = {
  mode: "vlsm", // 'quick' | 'vlsm'
  problem: null,
  quick: null,
};

function normIp(s) {
  return String(s).trim();
}
function normPrefix(s) {
  return String(s).trim().replace(/^\/+/, "");
}

function initSubnetDrill() {
  const root = document.getElementById("drillView");
  if (!root) return;

  root.innerHTML = `
    <section class="card">
      <div class="drill-head">
        <div class="seg">
          <button class="seg-btn active" data-mode="vlsm">Full VLSM</button>
          <button class="seg-btn" data-mode="quick">Quick (single subnet)</button>
        </div>
        <div class="drill-actions">
          <button id="newProblem" class="btn primary">New problem</button>
          <button id="checkAnswers" class="btn">Check</button>
          <button id="revealAnswers" class="btn">Reveal</button>
        </div>
      </div>
      <div id="drillBody"></div>
      <div id="drillScore" class="feedback"></div>
      <details class="cheat">
        <summary>Cheat sheet</summary>
        <div class="cheat-body">
          <p><b>usable = 2^h − 2</b> &nbsp; prefix = 32 − h &nbsp; block = 2^h</p>
          <p>Powers: 2 4 8 16 32 64 128 256 512 1024 2048 4096</p>
          <p>Mask: /25=128 /26=192 /27=224 /28=240 /29=248 /30=252 /31=254 /32=255</p>
          <p>Sort largest hosts first. Next subnet = previous broadcast + 1.</p>
        </div>
      </details>
    </section>
  `;

  root.querySelectorAll(".seg-btn").forEach((b) => {
    b.addEventListener("click", () => {
      root.querySelectorAll(".seg-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      sub.mode = b.dataset.mode;
      newProblem();
    });
  });
  document.getElementById("newProblem").addEventListener("click", newProblem);
  document.getElementById("checkAnswers").addEventListener("click", checkAnswers);
  document.getElementById("revealAnswers").addEventListener("click", revealAnswers);

  newProblem();
}

function newProblem() {
  document.getElementById("drillScore").textContent = "";
  document.getElementById("drillScore").className = "feedback";
  if (sub.mode === "quick") renderQuick();
  else renderVlsm();
}

/* ---------- Quick mode: one requirement, drill the formula ---------- */
function renderQuick() {
  const hosts = randInt(2, 4000);
  const h = hostBitsForHosts(hosts);
  sub.quick = {
    hosts, h,
    prefix: 32 - h,
    block: Math.pow(2, h),
    mask: prefixToMask(32 - h),
    usable: Math.pow(2, h) - 2,
  };
  const body = document.getElementById("drillBody");
  body.innerHTML = `
    <p class="prompt">You need <b>${hosts}</b> usable hosts. Size the smallest subnet that fits.</p>
    <div class="qgrid">
      ${qField("Host bits (h)", "q_h")}
      ${qField("Prefix (/n)", "q_prefix")}
      ${qField("Block size", "q_block")}
      ${qField("Subnet mask", "q_mask")}
      ${qField("Usable hosts", "q_usable")}
    </div>
  `;
}
function qField(label, id) {
  return `<label class="field"><span>${label}</span>
    <input id="${id}" type="text" autocomplete="off" spellcheck="false" /></label>`;
}

/* ---------- VLSM mode: full allocation table ---------- */
function renderVlsm() {
  sub.problem = genProblem();
  const p = sub.problem;
  const rows = [...p.requirements].sort((a, b) => b.hosts - a.hosts);
  const body = document.getElementById("drillBody");
  body.innerHTML = `
    <p class="prompt">Base network: <b>${p.baseIp}/${p.basePrefix}</b>.
      Allocate each subnet (already sorted largest first).</p>
    <div class="tbl-wrap">
    <table class="vlsm">
      <thead><tr>
        <th>Subnet</th><th>Hosts</th><th>Prefix</th><th>Mask</th>
        <th>Network</th><th>1st host</th><th>Last host</th><th>Broadcast</th>
      </tr></thead>
      <tbody>
        ${rows.map((r, i) => `
          <tr data-row="${i}">
            <td>${r.label}</td>
            <td>${r.hosts}</td>
            ${cell(i, "prefix", 5)}
            ${cell(i, "mask", 14)}
            ${cell(i, "network", 14)}
            ${cell(i, "firstHost", 14)}
            ${cell(i, "lastHost", 14)}
            ${cell(i, "broadcast", 14)}
          </tr>`).join("")}
      </tbody>
    </table>
    </div>
  `;
}
function cell(row, field, size) {
  return `<td><input class="vc" data-row="${row}" data-field="${field}"
    size="${size}" type="text" autocomplete="off" spellcheck="false" /></td>`;
}

/* ---------- Grading ---------- */
function markInput(el, ok) {
  el.classList.remove("cell-ok", "cell-bad");
  el.classList.add(ok ? "cell-ok" : "cell-bad");
}

function checkAnswers() {
  if (sub.mode === "quick") return checkQuick();
  return checkVlsm();
}

function checkQuick() {
  const q = sub.quick;
  const checks = [
    ["q_h", String(q.h)],
    ["q_prefix", String(q.prefix)],
    ["q_block", String(q.block)],
    ["q_mask", q.mask],
    ["q_usable", String(q.usable)],
  ];
  let correct = 0;
  checks.forEach(([id, want]) => {
    const el = document.getElementById(id);
    let val = el.value.trim();
    if (id === "q_prefix") val = normPrefix(val);
    const ok = val === want;
    if (ok) correct++;
    markInput(el, ok);
  });
  score(correct, checks.length);
}

function checkVlsm() {
  const sol = sub.problem.solution; // already sorted largest first
  const inputs = document.querySelectorAll(".vc");
  let correct = 0, total = 0;
  inputs.forEach((el) => {
    const row = +el.dataset.row;
    const field = el.dataset.field;
    const want = String(sol[row][field]);
    let val = el.value.trim();
    if (field === "prefix") val = normPrefix(val);
    else val = normIp(val);
    const ok = val === want;
    total++;
    if (ok) correct++;
    markInput(el, ok);
  });
  score(correct, total);
}

function revealAnswers() {
  if (sub.mode === "quick") {
    const q = sub.quick;
    const map = {
      q_h: q.h, q_prefix: "/" + q.prefix, q_block: q.block,
      q_mask: q.mask, q_usable: q.usable,
    };
    Object.entries(map).forEach(([id, v]) => {
      const el = document.getElementById(id);
      el.value = v;
      el.classList.remove("cell-bad");
      el.classList.add("cell-ok");
    });
  } else {
    const sol = sub.problem.solution;
    document.querySelectorAll(".vc").forEach((el) => {
      const v = sol[+el.dataset.row][el.dataset.field];
      el.value = el.dataset.field === "prefix" ? "/" + v : v;
      el.classList.remove("cell-bad");
      el.classList.add("cell-ok");
    });
  }
  const s = document.getElementById("drillScore");
  s.textContent = "Answers revealed.";
  s.className = "feedback warn";
}

function score(correct, total) {
  const s = document.getElementById("drillScore");
  s.textContent = `${correct} / ${total} correct.` +
    (correct === total ? " Clean sheet." : " Fix the red cells.");
  s.className = "feedback " + (correct === total ? "ok" : "bad");
}
