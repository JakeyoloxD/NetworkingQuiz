/* Cisco question bank — inlined so no fetch/server is needed. */
window.CISCO_BANK = {
  "title": "Cisco Exam Quiz Questions",
  "version": "1.0",
  "description": "Quiz bank built from the uploaded Cisco study sheet photos, with extra similar Cisco-style questions added for practice.",
  "question_count": 150,
  "schema": {
    "id": "unique string",
    "category": "topic area",
    "source": "photo_original or generated_similar",
    "question": "question text",
    "choices": "array of possible answers",
    "answer": "correct answer exactly matching one choice",
    "explanation": "short explanation",
    "difficulty": "easy, medium, or hard",
    "tags": "array of keywords"
  },
  "questions": [
    {
      "id": "orig-001",
      "category": "Application Layer",
      "source": "photo_original",
      "question": "What port does POP3 normally use?",
      "choices": [
        "25",
        "53",
        "110",
        "143"
      ],
      "answer": "110",
      "explanation": "POP3 normally uses TCP port 110 for retrieving email from a mail server.",
      "difficulty": "easy",
      "tags": [
        "ports",
        "email",
        "pop3"
      ]
    },
    {
      "id": "orig-002",
      "category": "Networking Models",
      "source": "photo_original",
      "question": "What type of network operates without a dedicated server?",
      "choices": [
        "Client-server",
        "Peer-to-peer",
        "Cloud-hosted",
        "Hierarchical"
      ],
      "answer": "Peer-to-peer",
      "explanation": "In a peer-to-peer network, devices can share resources directly without relying on a dedicated central server.",
      "difficulty": "easy",
      "tags": [
        "p2p",
        "network-types"
      ]
    },
    {
      "id": "orig-003",
      "category": "QoS",
      "source": "photo_original",
      "question": "Which type of traffic usually needs the highest QoS priority?",
      "choices": [
        "Web browsing",
        "Email",
        "Voice or video conferencing",
        "File downloads"
      ],
      "answer": "Voice or video conferencing",
      "explanation": "Real-time traffic like voice and video is sensitive to delay, jitter, and packet loss, so it is usually prioritised.",
      "difficulty": "easy",
      "tags": [
        "qos",
        "voice",
        "video"
      ]
    },
    {
      "id": "orig-004",
      "category": "Subnetting",
      "source": "photo_original",
      "question": "What are the three main parts of an IPv6 address structure?",
      "choices": [
        "Network ID, host ID, broadcast ID",
        "Global routing prefix, subnet ID, interface ID",
        "MAC address, subnet mask, gateway",
        "Prefix, suffix, checksum"
      ],
      "answer": "Global routing prefix, subnet ID, interface ID",
      "explanation": "IPv6 unicast addresses are commonly described using a global routing prefix, subnet ID, and interface ID.",
      "difficulty": "medium",
      "tags": [
        "ipv6",
        "subnetting"
      ]
    },
    {
      "id": "orig-005",
      "category": "Switching",
      "source": "photo_original",
      "question": "What are the three common switching methods?",
      "choices": [
        "Store-and-forward, cut-through, fragment-free",
        "Routing, switching, bridging",
        "Unicast, multicast, broadcast",
        "Half duplex, full duplex, simplex"
      ],
      "answer": "Store-and-forward, cut-through, fragment-free",
      "explanation": "Cisco commonly teaches three switching methods: store-and-forward, cut-through, and fragment-free.",
      "difficulty": "easy",
      "tags": [
        "switching",
        "ethernet"
      ]
    },
    {
      "id": "orig-006",
      "category": "Applications",
      "source": "photo_original",
      "question": "Which application provides real-time text communication over a network?",
      "choices": [
        "FTP",
        "Instant messaging",
        "DNS",
        "SNMP"
      ],
      "answer": "Instant messaging",
      "explanation": "Instant messaging provides near real-time communication between users.",
      "difficulty": "easy",
      "tags": [
        "applications",
        "im"
      ]
    },
    {
      "id": "orig-007",
      "category": "Interference",
      "source": "photo_original",
      "question": "What do RFI and EMI stand for?",
      "choices": [
        "Radio File Input and Ethernet Media Input",
        "Radio Frequency Interference and Electromagnetic Interference",
        "Routing Fault Indicator and Ethernet Management Interface",
        "Remote Frame Injection and External Message Interface"
      ],
      "answer": "Radio Frequency Interference and Electromagnetic Interference",
      "explanation": "RFI is Radio Frequency Interference. EMI is Electromagnetic Interference. Both can disrupt network signals.",
      "difficulty": "easy",
      "tags": [
        "cabling",
        "wireless",
        "interference"
      ]
    },
    {
      "id": "orig-008",
      "category": "Ethernet",
      "source": "photo_original",
      "question": "How is CSMA/CD implemented on legacy shared half-duplex Ethernet?",
      "choices": [
        "Via the MAC sublayer",
        "Via the IP layer",
        "Via the application layer",
        "Via DNS"
      ],
      "answer": "Via the MAC sublayer",
      "explanation": "CSMA/CD is part of Ethernet media access behavior and is handled at the data link layer MAC sublayer.",
      "difficulty": "medium",
      "tags": [
        "ethernet",
        "csma-cd",
        "mac"
      ]
    },
    {
      "id": "orig-009",
      "category": "Ethernet",
      "source": "photo_original",
      "question": "Which sublayer sits above the MAC sublayer in Ethernet?",
      "choices": [
        "LLC",
        "ARP",
        "IP",
        "TCP"
      ],
      "answer": "LLC",
      "explanation": "The data link layer is split into LLC and MAC. LLC sits above MAC.",
      "difficulty": "easy",
      "tags": [
        "ethernet",
        "llc",
        "mac"
      ]
    },
    {
      "id": "orig-010",
      "category": "Ethernet",
      "source": "photo_original",
      "question": "In Ethernet, which sublayer works with physical addressing and media access?",
      "choices": [
        "MAC",
        "LLC",
        "Transport",
        "Application"
      ],
      "answer": "MAC",
      "explanation": "The MAC sublayer handles physical addressing and controls access to the shared medium.",
      "difficulty": "easy",
      "tags": [
        "ethernet",
        "mac"
      ]
    },
    {
      "id": "orig-011",
      "category": "Ethernet",
      "source": "photo_original",
      "question": "How is network flow control commonly handled on Ethernet links?",
      "choices": [
        "By MAC layer mechanisms",
        "By DNS lookups",
        "By HTTP headers",
        "By subnet masks"
      ],
      "answer": "By MAC layer mechanisms",
      "explanation": "Ethernet flow control is handled at Layer 2 using MAC control mechanisms such as pause frames.",
      "difficulty": "medium",
      "tags": [
        "ethernet",
        "flow-control"
      ]
    },
    {
      "id": "orig-012",
      "category": "Transport Layer",
      "source": "photo_original",
      "question": "How are source ports used to track data flows to multiple application sessions?",
      "choices": [
        "Each application session uses a different source port",
        "Every session uses port 80",
        "Source ports are only used by routers",
        "Source ports replace MAC addresses"
      ],
      "answer": "Each application session uses a different source port",
      "explanation": "Source ports help the host separate multiple conversations and return traffic to the correct application.",
      "difficulty": "medium",
      "tags": [
        "tcp",
        "udp",
        "ports",
        "sessions"
      ]
    },
    {
      "id": "orig-013",
      "category": "Application Layer",
      "source": "photo_original",
      "question": "How does SMTP operate?",
      "choices": [
        "It allows clients to send email to a mail server and servers to relay email to other mail servers",
        "It resolves names to IP addresses",
        "It assigns IP addresses to clients",
        "It encrypts web pages"
      ],
      "answer": "It allows clients to send email to a mail server and servers to relay email to other mail servers",
      "explanation": "SMTP is used to send and relay email. POP3 and IMAP are used to retrieve mail.",
      "difficulty": "easy",
      "tags": [
        "smtp",
        "email",
        "ports"
      ]
    },
    {
      "id": "orig-014",
      "category": "QoS",
      "source": "photo_original",
      "question": "What is QoS?",
      "choices": [
        "A method of prioritising important network traffic",
        "A cable testing standard",
        "A type of subnet mask",
        "A wireless encryption method"
      ],
      "answer": "A method of prioritising important network traffic",
      "explanation": "Quality of Service is used to prioritise traffic so delay-sensitive applications perform better.",
      "difficulty": "easy",
      "tags": [
        "qos"
      ]
    },
    {
      "id": "orig-015",
      "category": "Cabling",
      "source": "photo_original",
      "question": "Why can low-quality connectors and poor cable termination affect data transmission?",
      "choices": [
        "They can degrade signal quality",
        "They increase CPU speed",
        "They change the IP address",
        "They disable DNS"
      ],
      "answer": "They can degrade signal quality",
      "explanation": "Bad termination or poor connectors can cause signal loss, reflections, and transmission errors.",
      "difficulty": "easy",
      "tags": [
        "cabling",
        "physical-layer"
      ]
    },
    {
      "id": "orig-016",
      "category": "IPv4",
      "source": "photo_original",
      "question": "Is 192.168.1.96 part of the 192.168.1.64/26 subnet?",
      "choices": [
        "Yes",
        "No"
      ],
      "answer": "Yes",
      "explanation": "A /26 has a block size of 64. The 192.168.1.64/26 network covers 192.168.1.64 through 192.168.1.127.",
      "difficulty": "medium",
      "tags": [
        "ipv4",
        "subnetting"
      ]
    },
    {
      "id": "orig-017",
      "category": "Troubleshooting",
      "source": "photo_original",
      "question": "What command shows the path and hop count to a destination?",
      "choices": [
        "ping",
        "traceroute",
        "ipconfig",
        "show version"
      ],
      "answer": "traceroute",
      "explanation": "Traceroute shows each routed hop between the source and destination.",
      "difficulty": "easy",
      "tags": [
        "troubleshooting",
        "traceroute"
      ]
    },
    {
      "id": "orig-018",
      "category": "Routing",
      "source": "photo_original",
      "question": "In a network path diagram, what does each routed network change usually represent?",
      "choices": [
        "A hop",
        "A VLAN only",
        "A DNS lookup",
        "A TCP flag"
      ],
      "answer": "A hop",
      "explanation": "A hop usually represents traffic passing through a Layer 3 device such as a router.",
      "difficulty": "easy",
      "tags": [
        "routing",
        "hops"
      ]
    },
    {
      "id": "orig-019",
      "category": "Traffic Analysis",
      "source": "photo_original",
      "question": "What is the purpose of capturing network traffic on a network analyser?",
      "choices": [
        "To assess the traffic flow",
        "To assign DHCP addresses",
        "To create VLANs",
        "To encrypt packets"
      ],
      "answer": "To assess the traffic flow",
      "explanation": "A network analyser captures packets so you can inspect traffic, protocols, errors, and flow patterns.",
      "difficulty": "easy",
      "tags": [
        "wireshark",
        "packet-capture"
      ]
    },
    {
      "id": "orig-020",
      "category": "IPv6",
      "source": "photo_original",
      "question": "What type of ICMPv6 message is activated when unicast routing is enabled on an IPv6 router?",
      "choices": [
        "Router Advertisements",
        "ARP Requests",
        "DHCP Discover",
        "TCP SYN"
      ],
      "answer": "Router Advertisements",
      "explanation": "IPv6 routers use ICMPv6 Router Advertisements to provide network information to IPv6 hosts.",
      "difficulty": "medium",
      "tags": [
        "ipv6",
        "icmpv6",
        "ra"
      ]
    },
    {
      "id": "orig-021",
      "category": "OSI Model",
      "source": "photo_original",
      "question": "How many layers are in the OSI model?",
      "choices": [
        "4",
        "5",
        "7",
        "8"
      ],
      "answer": "7",
      "explanation": "The OSI model has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
      "difficulty": "easy",
      "tags": [
        "osi"
      ]
    },
    {
      "id": "orig-022",
      "category": "TCP/IP Model",
      "source": "photo_original",
      "question": "What are the four layers of the TCP/IP model?",
      "choices": [
        "Application, Transport, Internet, Network Access",
        "Physical, Data Link, Session, Application",
        "MAC, LLC, IP, TCP",
        "User, Server, Router, Switch"
      ],
      "answer": "Application, Transport, Internet, Network Access",
      "explanation": "The common Cisco TCP/IP model uses Application, Transport, Internet, and Network Access layers.",
      "difficulty": "easy",
      "tags": [
        "tcp-ip-model"
      ]
    },
    {
      "id": "orig-023",
      "category": "Troubleshooting",
      "source": "photo_original",
      "question": "Which command can confirm whether you can reach your LAN gateway?",
      "choices": [
        "ping default_gateway_ip",
        "show vlan brief",
        "nslookup localhost",
        "netstat -a"
      ],
      "answer": "ping default_gateway_ip",
      "explanation": "Pinging the default gateway checks basic local network connectivity to the router.",
      "difficulty": "easy",
      "tags": [
        "ping",
        "gateway",
        "troubleshooting"
      ]
    },
    {
      "id": "orig-024",
      "category": "ARP",
      "source": "photo_original",
      "question": "Why does ARP exist?",
      "choices": [
        "To resolve an IPv4 address to a MAC address",
        "To resolve domain names",
        "To assign default gateways",
        "To encrypt wireless traffic"
      ],
      "answer": "To resolve an IPv4 address to a MAC address",
      "explanation": "ARP maps an IPv4 address to a MAC address on a local network.",
      "difficulty": "easy",
      "tags": [
        "arp",
        "ipv4",
        "mac"
      ]
    },
    {
      "id": "orig-025",
      "category": "ARP",
      "source": "photo_original",
      "question": "When a host needs the MAC address for a known IPv4 address on the local network, what does it send?",
      "choices": [
        "ARP request",
        "DNS query",
        "TCP ACK",
        "Router Advertisement"
      ],
      "answer": "ARP request",
      "explanation": "The host sends an ARP request asking which device has the target IPv4 address.",
      "difficulty": "easy",
      "tags": [
        "arp"
      ]
    },
    {
      "id": "orig-026",
      "category": "Ports",
      "source": "photo_original",
      "question": "Match the ports 20, 21, 22, 23, 25, 53, 67, 68, 69, 80, 443, and 110 to their common services.",
      "choices": [
        "FTP data, FTP control, SSH, Telnet, SMTP, DNS, DHCP server, DHCP client, TFTP, HTTP, HTTPS, POP3",
        "HTTP, HTTPS, DNS, POP3, SMTP, FTP, SSH, Telnet, DHCP, DHCP, TFTP, SNMP",
        "DNS, HTTP, HTTPS, SMTP, POP3, IMAP, SSH, FTP, Telnet, SNMP, DHCP, TFTP",
        "ARP, ICMP, TCP, UDP, HTTP, HTTPS, DNS, SMTP, POP3, FTP, SSH, Telnet"
      ],
      "answer": "FTP data, FTP control, SSH, Telnet, SMTP, DNS, DHCP server, DHCP client, TFTP, HTTP, HTTPS, POP3",
      "explanation": "These are common CCNA-level port mappings.",
      "difficulty": "medium",
      "tags": [
        "ports",
        "services"
      ]
    },
    {
      "id": "orig-027",
      "category": "POP vs IMAP",
      "source": "photo_original",
      "question": "What is the difference between POP and IMAP?",
      "choices": [
        "POP downloads mail from the server, while IMAP keeps mail on the server and syncs folders",
        "POP sends mail, while IMAP resolves DNS",
        "POP uses UDP, while IMAP uses ICMP",
        "POP is for web pages, while IMAP is for file transfer"
      ],
      "answer": "POP downloads mail from the server, while IMAP keeps mail on the server and syncs folders",
      "explanation": "POP is simple download-style retrieval. IMAP is better for syncing mail across multiple devices.",
      "difficulty": "easy",
      "tags": [
        "email",
        "pop3",
        "imap"
      ]
    },
    {
      "id": "orig-028",
      "category": "Network Tools",
      "source": "photo_original",
      "question": "What does nslookup do?",
      "choices": [
        "Queries DNS for name and IP information",
        "Shows the MAC address table",
        "Captures packets",
        "Encrypts traffic"
      ],
      "answer": "Queries DNS for name and IP information",
      "explanation": "nslookup is used to query DNS records and test name resolution.",
      "difficulty": "easy",
      "tags": [
        "dns",
        "nslookup"
      ]
    },
    {
      "id": "orig-029",
      "category": "Network Tools",
      "source": "photo_original",
      "question": "What does ipconfig display on a Windows PC?",
      "choices": [
        "IP configuration details",
        "Routing protocols only",
        "Web server logs",
        "Switch VLAN tables"
      ],
      "answer": "IP configuration details",
      "explanation": "ipconfig shows IP address, subnet mask, default gateway, and DNS information on Windows.",
      "difficulty": "easy",
      "tags": [
        "windows",
        "ipconfig"
      ]
    },
    {
      "id": "orig-030",
      "category": "Network Tools",
      "source": "photo_original",
      "question": "What does netstat show?",
      "choices": [
        "Active network connections and listening ports",
        "Only DNS records",
        "Only wireless signal strength",
        "Only routing table entries"
      ],
      "answer": "Active network connections and listening ports",
      "explanation": "netstat displays active connections, listening ports, and related network statistics.",
      "difficulty": "easy",
      "tags": [
        "netstat",
        "troubleshooting"
      ]
    },
    {
      "id": "orig-031",
      "category": "Network Tools",
      "source": "photo_original",
      "question": "What does route print display on Windows?",
      "choices": [
        "The routing table",
        "The ARP cache only",
        "The DHCP lease database",
        "The MAC address table"
      ],
      "answer": "The routing table",
      "explanation": "route print shows the local IPv4 and IPv6 routing tables.",
      "difficulty": "easy",
      "tags": [
        "windows",
        "routing-table"
      ]
    },
    {
      "id": "orig-032",
      "category": "Routing",
      "source": "photo_original",
      "question": "What does 0.0.0.0/0 represent in a routing table?",
      "choices": [
        "The default route",
        "The loopback address",
        "A broadcast address",
        "A multicast group"
      ],
      "answer": "The default route",
      "explanation": "0.0.0.0/0 matches all IPv4 destinations and is used as the default route.",
      "difficulty": "easy",
      "tags": [
        "routing",
        "default-route"
      ]
    },
    {
      "id": "orig-033",
      "category": "Network Layer",
      "source": "photo_original",
      "question": "What does the network layer do?",
      "choices": [
        "Routes packets using logical addresses",
        "Encodes bits onto cables",
        "Manages user logins",
        "Compresses files"
      ],
      "answer": "Routes packets using logical addresses",
      "explanation": "The network layer uses logical addressing, such as IP addresses, to route packets between networks.",
      "difficulty": "easy",
      "tags": [
        "osi",
        "network-layer",
        "ip"
      ]
    },
    {
      "id": "orig-034",
      "category": "Transport Layer",
      "source": "photo_original",
      "question": "What is TCP used for?",
      "choices": [
        "Reliable connection-oriented transport",
        "Physical cabling",
        "MAC address learning",
        "Name resolution"
      ],
      "answer": "Reliable connection-oriented transport",
      "explanation": "TCP provides reliable delivery using sequencing, acknowledgments, and retransmission.",
      "difficulty": "easy",
      "tags": [
        "tcp",
        "transport"
      ]
    },
    {
      "id": "orig-035",
      "category": "Transport Layer",
      "source": "photo_original",
      "question": "What is UDP used for?",
      "choices": [
        "Fast connectionless transport",
        "Reliable retransmission only",
        "MAC address resolution",
        "Subnet mask calculation"
      ],
      "answer": "Fast connectionless transport",
      "explanation": "UDP is connectionless and lightweight, often used where speed matters more than guaranteed delivery.",
      "difficulty": "easy",
      "tags": [
        "udp",
        "transport"
      ]
    },
    {
      "id": "orig-036",
      "category": "Transport Layer",
      "source": "photo_original",
      "question": "What are TCP sequence numbers used for?",
      "choices": [
        "Ordering segments and tracking missing data",
        "Choosing a default gateway",
        "Resolving DNS",
        "Selecting VLAN IDs"
      ],
      "answer": "Ordering segments and tracking missing data",
      "explanation": "TCP sequence numbers allow the receiver to reassemble data and detect missing segments.",
      "difficulty": "medium",
      "tags": [
        "tcp",
        "sequence"
      ]
    },
    {
      "id": "orig-037",
      "category": "TCP",
      "source": "photo_original",
      "question": "What does an acknowledgment in TCP mean?",
      "choices": [
        "Data was received successfully",
        "DNS failed",
        "A cable is unplugged",
        "The packet is broadcast"
      ],
      "answer": "Data was received successfully",
      "explanation": "TCP acknowledgments confirm receipt of data and support reliable delivery.",
      "difficulty": "easy",
      "tags": [
        "tcp",
        "ack"
      ]
    },
    {
      "id": "orig-038",
      "category": "Subnetting",
      "source": "photo_original",
      "question": "What subnet mask would create 10 hosts per subnet using the smallest suitable subnet?",
      "choices": [
        "/28",
        "/29",
        "/25",
        "/30"
      ],
      "answer": "/28",
      "explanation": "A /28 leaves 4 host bits, giving 16 addresses and 14 usable hosts.",
      "difficulty": "medium",
      "tags": [
        "subnetting",
        "ipv4"
      ]
    },
    {
      "id": "orig-039",
      "category": "Subnetting",
      "source": "photo_original",
      "question": "What subnet mask would create at least 25 usable hosts per subnet?",
      "choices": [
        "/27",
        "/28",
        "/29",
        "/30"
      ],
      "answer": "/27",
      "explanation": "A /27 leaves 5 host bits, giving 32 addresses and 30 usable hosts.",
      "difficulty": "medium",
      "tags": [
        "subnetting",
        "ipv4"
      ]
    },
    {
      "id": "orig-040",
      "category": "OSI Model",
      "source": "photo_original",
      "question": "Are UDP segments encapsulated inside IP packets?",
      "choices": [
        "Yes",
        "No"
      ],
      "answer": "Yes",
      "explanation": "Transport layer segments or datagrams are encapsulated inside network layer IP packets.",
      "difficulty": "easy",
      "tags": [
        "encapsulation",
        "udp",
        "ip"
      ]
    },
    {
      "id": "orig-041",
      "category": "TCP",
      "source": "photo_original",
      "question": "What is a TCP window used for?",
      "choices": [
        "Flow control",
        "DNS resolution",
        "Cable testing",
        "Encrypting packets"
      ],
      "answer": "Flow control",
      "explanation": "The TCP window controls how much data can be sent before requiring acknowledgment.",
      "difficulty": "medium",
      "tags": [
        "tcp",
        "window",
        "flow-control"
      ]
    },
    {
      "id": "orig-042",
      "category": "TCP",
      "source": "photo_original",
      "question": "What is a TCP packet sequence number used for?",
      "choices": [
        "Ordering transmitted data",
        "Selecting the VLAN",
        "Choosing the subnet mask",
        "Resolving a MAC address"
      ],
      "answer": "Ordering transmitted data",
      "explanation": "Sequence numbers allow TCP data to be reassembled in the correct order.",
      "difficulty": "medium",
      "tags": [
        "tcp",
        "sequence"
      ]
    },
    {
      "id": "orig-043",
      "category": "TCP",
      "source": "photo_original",
      "question": "How does TCP handle retransmission?",
      "choices": [
        "It resends missing data when acknowledgments are not received",
        "It broadcasts every packet twice",
        "It changes the source IP",
        "It asks DNS to resend packets"
      ],
      "answer": "It resends missing data when acknowledgments are not received",
      "explanation": "TCP retransmits data when it detects loss through missing acknowledgments or timeout.",
      "difficulty": "medium",
      "tags": [
        "tcp",
        "retransmission"
      ]
    },
    {
      "id": "orig-044",
      "category": "Transport Layer",
      "source": "photo_original",
      "question": "What is a TCP three-way handshake used for?",
      "choices": [
        "Establishing a TCP connection",
        "Resolving a domain name",
        "Assigning an IP address",
        "Learning a MAC address"
      ],
      "answer": "Establishing a TCP connection",
      "explanation": "TCP uses SYN, SYN-ACK, and ACK to establish a session.",
      "difficulty": "easy",
      "tags": [
        "tcp",
        "handshake"
      ]
    },
    {
      "id": "orig-045",
      "category": "Transport Layer",
      "source": "photo_original",
      "question": "What are port numbers used for?",
      "choices": [
        "Identifying applications and services on a host",
        "Identifying physical cable length",
        "Replacing IP addresses",
        "Choosing a subnet mask"
      ],
      "answer": "Identifying applications and services on a host",
      "explanation": "Ports allow multiple applications to communicate over the network at the same time.",
      "difficulty": "easy",
      "tags": [
        "ports",
        "transport"
      ]
    },
    {
      "id": "orig-046",
      "category": "Application Layer",
      "source": "photo_original",
      "question": "Which protocol is used to transfer web pages?",
      "choices": [
        "HTTP or HTTPS",
        "ARP",
        "ICMP",
        "DHCP"
      ],
      "answer": "HTTP or HTTPS",
      "explanation": "HTTP and HTTPS are used for web traffic.",
      "difficulty": "easy",
      "tags": [
        "http",
        "https",
        "web"
      ]
    },
    {
      "id": "orig-047",
      "category": "HTTP",
      "source": "photo_original",
      "question": "What does an HTTP 200 status code mean?",
      "choices": [
        "OK",
        "Not found",
        "Server error",
        "Moved permanently"
      ],
      "answer": "OK",
      "explanation": "HTTP 200 means the request succeeded.",
      "difficulty": "easy",
      "tags": [
        "http",
        "status-codes"
      ]
    },
    {
      "id": "orig-048",
      "category": "DNS",
      "source": "photo_original",
      "question": "What is DNS used for?",
      "choices": [
        "Resolving names to IP addresses",
        "Encrypting files",
        "Assigning MAC addresses",
        "Sending email"
      ],
      "answer": "Resolving names to IP addresses",
      "explanation": "DNS translates domain names into IP addresses.",
      "difficulty": "easy",
      "tags": [
        "dns"
      ]
    },
    {
      "id": "orig-049",
      "category": "AAA",
      "source": "photo_original",
      "question": "What does AAA stand for?",
      "choices": [
        "Authentication, Authorization, Accounting",
        "Access, Addressing, Application",
        "Allow, Alert, Audit",
        "ARP, ACL, ASA"
      ],
      "answer": "Authentication, Authorization, Accounting",
      "explanation": "AAA controls who you are, what you can do, and what activity gets logged.",
      "difficulty": "easy",
      "tags": [
        "aaa",
        "security"
      ]
    },
    {
      "id": "orig-050",
      "category": "Cabling",
      "source": "photo_original",
      "question": "What is crosstalk in copper cabling?",
      "choices": [
        "Interference between adjacent wire pairs",
        "A routing loop",
        "A DNS failure",
        "A wireless authentication issue"
      ],
      "answer": "Interference between adjacent wire pairs",
      "explanation": "Crosstalk happens when signals from one wire pair interfere with another pair.",
      "difficulty": "easy",
      "tags": [
        "cabling",
        "crosstalk"
      ]
    },
    {
      "id": "orig-051",
      "category": "Network Security",
      "source": "photo_original",
      "question": "What does a firewall use to decide whether to permit or deny traffic?",
      "choices": [
        "Rules or access control lists",
        "Only MAC address speed",
        "Only cable length",
        "Only DNS names"
      ],
      "answer": "Rules or access control lists",
      "explanation": "Firewalls use rules, often ACL-based, to allow or deny traffic.",
      "difficulty": "easy",
      "tags": [
        "firewall",
        "acl"
      ]
    },
    {
      "id": "orig-052",
      "category": "Routing",
      "source": "photo_original",
      "question": "What does the router do when it receives a packet for a remote network?",
      "choices": [
        "It checks the routing table and forwards it toward the destination",
        "It always broadcasts it",
        "It deletes the packet immediately",
        "It sends it to DNS"
      ],
      "answer": "It checks the routing table and forwards it toward the destination",
      "explanation": "Routers forward packets based on destination IP address and routing table matches.",
      "difficulty": "easy",
      "tags": [
        "routing"
      ]
    },
    {
      "id": "orig-053",
      "category": "Switching",
      "source": "photo_original",
      "question": "What does a switch use to forward Ethernet frames?",
      "choices": [
        "MAC address table",
        "DNS table",
        "ARP request table only",
        "HTTP cache"
      ],
      "answer": "MAC address table",
      "explanation": "Switches learn source MAC addresses and forward frames based on destination MAC addresses.",
      "difficulty": "easy",
      "tags": [
        "switching",
        "mac-table"
      ]
    },
    {
      "id": "orig-054",
      "category": "Default Gateway",
      "source": "photo_original",
      "question": "Why does a host need a default gateway?",
      "choices": [
        "To reach networks outside its local network",
        "To increase RAM",
        "To replace DNS",
        "To make ARP unnecessary"
      ],
      "answer": "To reach networks outside its local network",
      "explanation": "The default gateway is the router used when the destination is outside the local subnet.",
      "difficulty": "easy",
      "tags": [
        "gateway",
        "routing"
      ]
    },
    {
      "id": "orig-055",
      "category": "IPv4",
      "source": "photo_original",
      "question": "What is 127.0.0.1?",
      "choices": [
        "The local loopback address",
        "The default route",
        "A public DNS server",
        "A broadcast address"
      ],
      "answer": "The local loopback address",
      "explanation": "127.0.0.1 refers to the local host and is used for loopback testing.",
      "difficulty": "easy",
      "tags": [
        "ipv4",
        "loopback"
      ]
    },
    {
      "id": "orig-056",
      "category": "Malware",
      "source": "photo_original",
      "question": "How does a computer worm affect network performance?",
      "choices": [
        "It can replicate and generate unwanted traffic",
        "It improves DNS speed",
        "It blocks all physical signals",
        "It increases cable bandwidth"
      ],
      "answer": "It can replicate and generate unwanted traffic",
      "explanation": "Worms can spread automatically and flood the network with malicious or unwanted traffic.",
      "difficulty": "easy",
      "tags": [
        "security",
        "malware",
        "worm"
      ]
    },
    {
      "id": "orig-057",
      "category": "Wireless",
      "source": "photo_original",
      "question": "Why does signal interference affect wireless networking?",
      "choices": [
        "It can weaken or corrupt the radio signal",
        "It changes TCP into UDP",
        "It removes IP addresses",
        "It disables subnetting"
      ],
      "answer": "It can weaken or corrupt the radio signal",
      "explanation": "Wireless depends on radio signals, so interference can reduce range, speed, and reliability.",
      "difficulty": "easy",
      "tags": [
        "wireless",
        "interference"
      ]
    },
    {
      "id": "orig-058",
      "category": "Router Configuration",
      "source": "photo_original",
      "question": "What symbol indicates global configuration mode on a Cisco router?",
      "choices": [
        "Router(config)#",
        "Router>",
        "Router#",
        "Router(config-if)#"
      ],
      "answer": "Router(config)#",
      "explanation": "Cisco global configuration mode uses the prompt format Router(config)#.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli",
        "configuration"
      ]
    },
    {
      "id": "orig-059",
      "category": "Cisco CLI",
      "source": "photo_original",
      "question": "Which Cisco command encrypts plaintext passwords in the running configuration?",
      "choices": [
        "service password-encryption",
        "enable secret",
        "copy run start",
        "show interfaces"
      ],
      "answer": "service password-encryption",
      "explanation": "service password-encryption applies weak encryption to plaintext passwords in the config.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli",
        "passwords"
      ]
    },
    {
      "id": "orig-060",
      "category": "Remote Access",
      "source": "photo_original",
      "question": "What is used for secure remote access to a Cisco device CLI?",
      "choices": [
        "SSH",
        "Telnet",
        "HTTP",
        "TFTP"
      ],
      "answer": "SSH",
      "explanation": "SSH provides encrypted remote CLI access. Telnet sends traffic in plaintext.",
      "difficulty": "easy",
      "tags": [
        "ssh",
        "remote-access"
      ]
    },
    {
      "id": "orig-061",
      "category": "Switching",
      "source": "photo_original",
      "question": "What would happen if a switch had no MAC address table entry for a destination MAC address?",
      "choices": [
        "It floods the frame out all ports except the incoming port",
        "It sends the frame to DNS",
        "It always drops the frame",
        "It changes it into an IP packet"
      ],
      "answer": "It floods the frame out all ports except the incoming port",
      "explanation": "Unknown unicast frames are flooded within the VLAN.",
      "difficulty": "medium",
      "tags": [
        "switching",
        "mac-table",
        "flooding"
      ]
    },
    {
      "id": "orig-062",
      "category": "IPv6",
      "source": "photo_original",
      "question": "How would a /56 IPv6 prefix be divided into /64 subnets?",
      "choices": [
        "256 subnets",
        "16 subnets",
        "64 subnets",
        "4096 subnets"
      ],
      "answer": "256 subnets",
      "explanation": "Going from /56 to /64 adds 8 subnet bits. 2^8 = 256 subnets.",
      "difficulty": "medium",
      "tags": [
        "ipv6",
        "subnetting"
      ]
    },
    {
      "id": "orig-063",
      "category": "Ethernet",
      "source": "photo_original",
      "question": "When does a MAC address destination change across a routed network?",
      "choices": [
        "At every router hop",
        "Only at the source PC",
        "Only at the destination server",
        "Never"
      ],
      "answer": "At every router hop",
      "explanation": "Layer 2 MAC addresses are rewritten for each local link. The Layer 3 IP destination stays the final host.",
      "difficulty": "medium",
      "tags": [
        "mac-address",
        "routing",
        "encapsulation"
      ]
    },
    {
      "id": "orig-064",
      "category": "Ethernet",
      "source": "photo_original",
      "question": "When does the source IP address change as traffic crosses a normal routed network without NAT?",
      "choices": [
        "It does not change",
        "At every switch",
        "At every router",
        "At the server only"
      ],
      "answer": "It does not change",
      "explanation": "Without NAT, the source and destination IP addresses stay the same end to end.",
      "difficulty": "medium",
      "tags": [
        "ip",
        "routing"
      ]
    },
    {
      "id": "orig-065",
      "category": "NAT",
      "source": "photo_original",
      "question": "At a NAT router, what address may be changed?",
      "choices": [
        "The source or destination IP address",
        "Only the Ethernet cable type",
        "Only the DNS server name",
        "Only the TCP sequence number"
      ],
      "answer": "The source or destination IP address",
      "explanation": "NAT changes IP address information, commonly translating private inside addresses to a public address.",
      "difficulty": "medium",
      "tags": [
        "nat",
        "routing"
      ]
    },
    {
      "id": "orig-066",
      "category": "Addressing",
      "source": "photo_original",
      "question": "How does a host know whether traffic is local or remote?",
      "choices": [
        "It compares the destination IP with its own IP and subnet mask",
        "It asks the switch first",
        "It checks the website URL only",
        "It compares TCP port numbers"
      ],
      "answer": "It compares the destination IP with its own IP and subnet mask",
      "explanation": "A host uses its IP address and subnet mask to decide whether the destination is on the same subnet.",
      "difficulty": "medium",
      "tags": [
        "subnetting",
        "gateway"
      ]
    },
    {
      "id": "orig-067",
      "category": "Data Encapsulation",
      "source": "photo_original",
      "question": "What is message encapsulation?",
      "choices": [
        "Wrapping data with protocol headers and trailers as it moves down the stack",
        "Encrypting every packet with Wi-Fi",
        "Deleting old packets",
        "Changing copper into fibre"
      ],
      "answer": "Wrapping data with protocol headers and trailers as it moves down the stack",
      "explanation": "Encapsulation adds protocol information at each layer so data can be transmitted and delivered correctly.",
      "difficulty": "easy",
      "tags": [
        "encapsulation",
        "osi"
      ]
    },
    {
      "id": "orig-068",
      "category": "Data Encapsulation",
      "source": "photo_original",
      "question": "What basic requirements must be present for a message to be transmitted?",
      "choices": [
        "A source, destination, medium, protocol, and encoded message",
        "Only a DNS server",
        "Only a web browser",
        "Only a router password"
      ],
      "answer": "A source, destination, medium, protocol, and encoded message",
      "explanation": "Communication requires a sender, receiver, channel, rules, and data representation.",
      "difficulty": "easy",
      "tags": [
        "communication",
        "encapsulation"
      ]
    },
    {
      "id": "orig-069",
      "category": "Media",
      "source": "photo_original",
      "question": "What is the difference between fibre and copper cabling?",
      "choices": [
        "Fibre uses light, copper uses electrical signals",
        "Fibre uses DNS, copper uses ARP",
        "Fibre is Layer 3, copper is Layer 4",
        "Copper cannot carry data"
      ],
      "answer": "Fibre uses light, copper uses electrical signals",
      "explanation": "Fibre transmits light through glass or plastic strands. Copper transmits electrical signals.",
      "difficulty": "easy",
      "tags": [
        "fibre",
        "copper",
        "physical-layer"
      ]
    },
    {
      "id": "orig-070",
      "category": "Fault Tolerance",
      "source": "photo_original",
      "question": "What is fault tolerance in networking?",
      "choices": [
        "The ability to keep working when a failure occurs",
        "A faster DNS lookup",
        "A password policy",
        "A type of cable connector"
      ],
      "answer": "The ability to keep working when a failure occurs",
      "explanation": "Fault tolerant networks use redundancy so failures do not completely stop service.",
      "difficulty": "easy",
      "tags": [
        "redundancy",
        "fault-tolerance"
      ]
    },
    {
      "id": "sim-001",
      "category": "Ports",
      "source": "generated_similar",
      "question": "Which port is used by HTTPS?",
      "choices": [
        "80",
        "443",
        "110",
        "25"
      ],
      "answer": "443",
      "explanation": "HTTPS uses TCP port 443.",
      "difficulty": "easy",
      "tags": [
        "ports",
        "https"
      ]
    },
    {
      "id": "sim-002",
      "category": "Ports",
      "source": "generated_similar",
      "question": "Which port is used by DNS for normal queries?",
      "choices": [
        "53",
        "67",
        "69",
        "110"
      ],
      "answer": "53",
      "explanation": "DNS commonly uses UDP port 53 for standard queries.",
      "difficulty": "easy",
      "tags": [
        "ports",
        "dns"
      ]
    },
    {
      "id": "sim-003",
      "category": "Ports",
      "source": "generated_similar",
      "question": "Which protocol uses ports 67 and 68?",
      "choices": [
        "DHCP",
        "DNS",
        "SMTP",
        "SSH"
      ],
      "answer": "DHCP",
      "explanation": "DHCP uses UDP 67 for the server and UDP 68 for the client.",
      "difficulty": "easy",
      "tags": [
        "ports",
        "dhcp"
      ]
    },
    {
      "id": "sim-004",
      "category": "Ports",
      "source": "generated_similar",
      "question": "Which service normally uses TCP port 22?",
      "choices": [
        "SSH",
        "Telnet",
        "FTP data",
        "SMTP"
      ],
      "answer": "SSH",
      "explanation": "SSH uses TCP port 22 for secure remote access.",
      "difficulty": "easy",
      "tags": [
        "ports",
        "ssh"
      ]
    },
    {
      "id": "sim-005",
      "category": "Ports",
      "source": "generated_similar",
      "question": "Which protocol sends email from a client to a mail server?",
      "choices": [
        "SMTP",
        "POP3",
        "IMAP",
        "DHCP"
      ],
      "answer": "SMTP",
      "explanation": "SMTP is used to send and relay mail.",
      "difficulty": "easy",
      "tags": [
        "email",
        "smtp"
      ]
    },
    {
      "id": "sim-006",
      "category": "Email",
      "source": "generated_similar",
      "question": "Which protocol is better when a user checks the same mailbox from multiple devices?",
      "choices": [
        "IMAP",
        "POP3",
        "TFTP",
        "ARP"
      ],
      "answer": "IMAP",
      "explanation": "IMAP keeps mail on the server and syncs folders across devices.",
      "difficulty": "easy",
      "tags": [
        "email",
        "imap"
      ]
    },
    {
      "id": "sim-007",
      "category": "Switching",
      "source": "generated_similar",
      "question": "Which switching method checks the full frame for errors before forwarding?",
      "choices": [
        "Store-and-forward",
        "Cut-through",
        "Fragment-free",
        "Fast-forward"
      ],
      "answer": "Store-and-forward",
      "explanation": "Store-and-forward switching receives the whole frame and checks the FCS before forwarding.",
      "difficulty": "medium",
      "tags": [
        "switching"
      ]
    },
    {
      "id": "sim-008",
      "category": "Switching",
      "source": "generated_similar",
      "question": "Which switching method begins forwarding after reading the destination MAC address?",
      "choices": [
        "Cut-through",
        "Store-and-forward",
        "Fragment-free",
        "Process switching"
      ],
      "answer": "Cut-through",
      "explanation": "Cut-through switching starts forwarding as soon as it has enough header information.",
      "difficulty": "medium",
      "tags": [
        "switching"
      ]
    },
    {
      "id": "sim-009",
      "category": "Switching",
      "source": "generated_similar",
      "question": "What does a switch learn from the source MAC address of incoming frames?",
      "choices": [
        "Which port that MAC address is reachable through",
        "The DNS server IP",
        "The default gateway password",
        "The TCP window size"
      ],
      "answer": "Which port that MAC address is reachable through",
      "explanation": "Switches build their MAC address table by learning source MAC addresses on incoming ports.",
      "difficulty": "easy",
      "tags": [
        "switching",
        "mac-table"
      ]
    },
    {
      "id": "sim-010",
      "category": "Switching",
      "source": "generated_similar",
      "question": "What does a switch do with a broadcast frame?",
      "choices": [
        "Floods it out all ports in the VLAN except the incoming port",
        "Drops it always",
        "Sends it only to the router",
        "Converts it into IPv6"
      ],
      "answer": "Floods it out all ports in the VLAN except the incoming port",
      "explanation": "Broadcast frames are flooded within the local broadcast domain.",
      "difficulty": "easy",
      "tags": [
        "switching",
        "broadcast"
      ]
    },
    {
      "id": "sim-011",
      "category": "ARP",
      "source": "generated_similar",
      "question": "What destination MAC address is used in an ARP request?",
      "choices": [
        "FF:FF:FF:FF:FF:FF",
        "00:00:00:00:00:00",
        "The default gateway only",
        "The DNS server MAC"
      ],
      "answer": "FF:FF:FF:FF:FF:FF",
      "explanation": "ARP requests are broadcast because the sender does not yet know the target MAC address.",
      "difficulty": "medium",
      "tags": [
        "arp",
        "broadcast",
        "mac"
      ]
    },
    {
      "id": "sim-012",
      "category": "ARP",
      "source": "generated_similar",
      "question": "What destination MAC address is usually used in an ARP reply?",
      "choices": [
        "The requester’s MAC address",
        "FF:FF:FF:FF:FF:FF",
        "The router's public IP",
        "255.255.255.255"
      ],
      "answer": "The requester’s MAC address",
      "explanation": "ARP replies are normally unicast back to the requesting host.",
      "difficulty": "medium",
      "tags": [
        "arp",
        "unicast"
      ]
    },
    {
      "id": "sim-013",
      "category": "IPv4",
      "source": "generated_similar",
      "question": "What is the usable host range for 192.168.1.64/26?",
      "choices": [
        "192.168.1.65 to 192.168.1.126",
        "192.168.1.64 to 192.168.1.127",
        "192.168.1.1 to 192.168.1.62",
        "192.168.1.129 to 192.168.1.190"
      ],
      "answer": "192.168.1.65 to 192.168.1.126",
      "explanation": "The network address is .64 and broadcast is .127, so usable hosts are .65 through .126.",
      "difficulty": "medium",
      "tags": [
        "subnetting",
        "ipv4"
      ]
    },
    {
      "id": "sim-014",
      "category": "IPv4",
      "source": "generated_similar",
      "question": "What is the broadcast address for 192.168.1.64/26?",
      "choices": [
        "192.168.1.127",
        "192.168.1.64",
        "192.168.1.255",
        "192.168.1.126"
      ],
      "answer": "192.168.1.127",
      "explanation": "A /26 subnet has 64 addresses. The subnet starting at .64 ends at .127.",
      "difficulty": "medium",
      "tags": [
        "subnetting",
        "broadcast"
      ]
    },
    {
      "id": "sim-015",
      "category": "IPv4",
      "source": "generated_similar",
      "question": "How many usable hosts are available in a /28 IPv4 subnet?",
      "choices": [
        "14",
        "16",
        "30",
        "62"
      ],
      "answer": "14",
      "explanation": "A /28 has 16 total addresses. Subtract network and broadcast, leaving 14 usable hosts.",
      "difficulty": "medium",
      "tags": [
        "subnetting"
      ]
    },
    {
      "id": "sim-016",
      "category": "IPv4",
      "source": "generated_similar",
      "question": "How many usable hosts are available in a /27 IPv4 subnet?",
      "choices": [
        "30",
        "32",
        "14",
        "62"
      ],
      "answer": "30",
      "explanation": "A /27 has 32 total addresses, with 30 usable host addresses.",
      "difficulty": "medium",
      "tags": [
        "subnetting"
      ]
    },
    {
      "id": "sim-017",
      "category": "IPv4",
      "source": "generated_similar",
      "question": "Which subnet mask matches /24?",
      "choices": [
        "255.255.255.0",
        "255.255.255.192",
        "255.255.255.224",
        "255.255.0.0"
      ],
      "answer": "255.255.255.0",
      "explanation": "/24 means the first 24 bits are network bits, which equals 255.255.255.0.",
      "difficulty": "easy",
      "tags": [
        "subnetting",
        "masks"
      ]
    },
    {
      "id": "sim-018",
      "category": "IPv4",
      "source": "generated_similar",
      "question": "Which subnet mask matches /26?",
      "choices": [
        "255.255.255.192",
        "255.255.255.224",
        "255.255.255.240",
        "255.255.255.0"
      ],
      "answer": "255.255.255.192",
      "explanation": "/26 uses 26 network bits, giving a mask of 255.255.255.192.",
      "difficulty": "medium",
      "tags": [
        "subnetting",
        "masks"
      ]
    },
    {
      "id": "sim-019",
      "category": "IPv6",
      "source": "generated_similar",
      "question": "What is the standard subnet size commonly used for IPv6 LANs?",
      "choices": [
        "/64",
        "/24",
        "/32",
        "/128"
      ],
      "answer": "/64",
      "explanation": "IPv6 LAN subnets are commonly /64.",
      "difficulty": "easy",
      "tags": [
        "ipv6",
        "subnetting"
      ]
    },
    {
      "id": "sim-020",
      "category": "IPv6",
      "source": "generated_similar",
      "question": "Which IPv6 feature can allow a host to configure itself using Router Advertisements?",
      "choices": [
        "SLAAC",
        "ARP",
        "NAT overload",
        "CSMA/CD"
      ],
      "answer": "SLAAC",
      "explanation": "Stateless Address Autoconfiguration uses Router Advertisements to help hosts configure IPv6 addresses.",
      "difficulty": "medium",
      "tags": [
        "ipv6",
        "slaac"
      ]
    },
    {
      "id": "sim-021",
      "category": "IPv6",
      "source": "generated_similar",
      "question": "Which protocol replaces ARP in IPv6?",
      "choices": [
        "Neighbor Discovery Protocol",
        "DNS",
        "DHCPv4",
        "SMTP"
      ],
      "answer": "Neighbor Discovery Protocol",
      "explanation": "IPv6 uses NDP with ICMPv6 messages instead of ARP.",
      "difficulty": "medium",
      "tags": [
        "ipv6",
        "ndp"
      ]
    },
    {
      "id": "sim-022",
      "category": "OSI Model",
      "source": "generated_similar",
      "question": "Which OSI layer is responsible for logical addressing and routing?",
      "choices": [
        "Network",
        "Transport",
        "Data Link",
        "Physical"
      ],
      "answer": "Network",
      "explanation": "Layer 3, the Network layer, handles IP addressing and routing.",
      "difficulty": "easy",
      "tags": [
        "osi",
        "layer3"
      ]
    },
    {
      "id": "sim-023",
      "category": "OSI Model",
      "source": "generated_similar",
      "question": "Which OSI layer is responsible for MAC addressing?",
      "choices": [
        "Data Link",
        "Network",
        "Transport",
        "Application"
      ],
      "answer": "Data Link",
      "explanation": "MAC addressing is part of Layer 2, the Data Link layer.",
      "difficulty": "easy",
      "tags": [
        "osi",
        "layer2",
        "mac"
      ]
    },
    {
      "id": "sim-024",
      "category": "OSI Model",
      "source": "generated_similar",
      "question": "Which OSI layer transmits bits across the medium?",
      "choices": [
        "Physical",
        "Data Link",
        "Network",
        "Session"
      ],
      "answer": "Physical",
      "explanation": "The Physical layer handles signals, cables, connectors, and bit transmission.",
      "difficulty": "easy",
      "tags": [
        "osi",
        "physical"
      ]
    },
    {
      "id": "sim-025",
      "category": "Encapsulation",
      "source": "generated_similar",
      "question": "What is the data unit at the transport layer commonly called?",
      "choices": [
        "Segment",
        "Packet",
        "Frame",
        "Bit"
      ],
      "answer": "Segment",
      "explanation": "TCP data units are called segments. UDP data units are often called datagrams.",
      "difficulty": "easy",
      "tags": [
        "encapsulation",
        "transport"
      ]
    },
    {
      "id": "sim-026",
      "category": "Encapsulation",
      "source": "generated_similar",
      "question": "What is the data unit at the network layer commonly called?",
      "choices": [
        "Packet",
        "Frame",
        "Segment",
        "Bit"
      ],
      "answer": "Packet",
      "explanation": "At Layer 3, the data unit is commonly called a packet.",
      "difficulty": "easy",
      "tags": [
        "encapsulation",
        "network-layer"
      ]
    },
    {
      "id": "sim-027",
      "category": "Encapsulation",
      "source": "generated_similar",
      "question": "What is the data unit at the data link layer commonly called?",
      "choices": [
        "Frame",
        "Packet",
        "Segment",
        "Message"
      ],
      "answer": "Frame",
      "explanation": "Layer 2 packages data into frames.",
      "difficulty": "easy",
      "tags": [
        "encapsulation",
        "data-link"
      ]
    },
    {
      "id": "sim-028",
      "category": "Transport Layer",
      "source": "generated_similar",
      "question": "Which transport protocol is connection-oriented?",
      "choices": [
        "TCP",
        "UDP",
        "IP",
        "ARP"
      ],
      "answer": "TCP",
      "explanation": "TCP establishes a connection before data transfer.",
      "difficulty": "easy",
      "tags": [
        "tcp",
        "transport"
      ]
    },
    {
      "id": "sim-029",
      "category": "Transport Layer",
      "source": "generated_similar",
      "question": "Which transport protocol is connectionless?",
      "choices": [
        "UDP",
        "TCP",
        "SMTP",
        "SSH"
      ],
      "answer": "UDP",
      "explanation": "UDP sends datagrams without establishing a session.",
      "difficulty": "easy",
      "tags": [
        "udp",
        "transport"
      ]
    },
    {
      "id": "sim-030",
      "category": "TCP",
      "source": "generated_similar",
      "question": "What are the three steps in a TCP three-way handshake?",
      "choices": [
        "SYN, SYN-ACK, ACK",
        "ACK, FIN, RST",
        "GET, POST, PUT",
        "Discover, Offer, Request"
      ],
      "answer": "SYN, SYN-ACK, ACK",
      "explanation": "TCP connections begin with SYN, SYN-ACK, then ACK.",
      "difficulty": "easy",
      "tags": [
        "tcp",
        "handshake"
      ]
    },
    {
      "id": "sim-031",
      "category": "TCP",
      "source": "generated_similar",
      "question": "What does TCP use to detect missing data?",
      "choices": [
        "Sequence numbers and acknowledgments",
        "MAC addresses only",
        "DNS records",
        "Subnet masks"
      ],
      "answer": "Sequence numbers and acknowledgments",
      "explanation": "TCP uses sequence numbers and acknowledgments to detect loss and reorder data.",
      "difficulty": "medium",
      "tags": [
        "tcp",
        "reliability"
      ]
    },
    {
      "id": "sim-032",
      "category": "UDP",
      "source": "generated_similar",
      "question": "Which application is commonly suited to UDP because it values speed over retransmission?",
      "choices": [
        "Voice over IP",
        "File download requiring exact delivery",
        "Email retrieval",
        "SSH administration"
      ],
      "answer": "Voice over IP",
      "explanation": "Voice traffic often uses UDP because retransmitting late packets is not useful.",
      "difficulty": "medium",
      "tags": [
        "udp",
        "voip"
      ]
    },
    {
      "id": "sim-033",
      "category": "QoS",
      "source": "generated_similar",
      "question": "Which traffic type is most sensitive to jitter?",
      "choices": [
        "Voice",
        "Email",
        "File transfer",
        "Print jobs"
      ],
      "answer": "Voice",
      "explanation": "Voice traffic is delay and jitter sensitive.",
      "difficulty": "easy",
      "tags": [
        "qos",
        "jitter"
      ]
    },
    {
      "id": "sim-034",
      "category": "QoS",
      "source": "generated_similar",
      "question": "What does QoS try to reduce for real-time applications?",
      "choices": [
        "Delay, jitter, and packet loss",
        "Subnet count only",
        "Number of VLANs",
        "Cable colour mismatch"
      ],
      "answer": "Delay, jitter, and packet loss",
      "explanation": "QoS improves performance for sensitive traffic by managing delay, jitter, and packet loss.",
      "difficulty": "easy",
      "tags": [
        "qos"
      ]
    },
    {
      "id": "sim-035",
      "category": "Cabling",
      "source": "generated_similar",
      "question": "Which copper cable problem is caused by nearby electrical motors or fluorescent lights?",
      "choices": [
        "EMI",
        "DNS failure",
        "NAT overload",
        "HTTP redirect"
      ],
      "answer": "EMI",
      "explanation": "Electromagnetic interference can be caused by nearby electrical equipment.",
      "difficulty": "easy",
      "tags": [
        "cabling",
        "emi"
      ]
    },
    {
      "id": "sim-036",
      "category": "Cabling",
      "source": "generated_similar",
      "question": "Which cable type is least affected by EMI?",
      "choices": [
        "Fibre optic",
        "UTP copper",
        "Coaxial copper",
        "Console rollover cable"
      ],
      "answer": "Fibre optic",
      "explanation": "Fibre uses light, not electrical signals, so it is resistant to EMI.",
      "difficulty": "easy",
      "tags": [
        "fibre",
        "emi"
      ]
    },
    {
      "id": "sim-037",
      "category": "Wireless",
      "source": "generated_similar",
      "question": "Why can walls and distance reduce Wi-Fi performance?",
      "choices": [
        "They weaken the radio signal",
        "They change TCP ports",
        "They delete the routing table",
        "They disable ARP"
      ],
      "answer": "They weaken the radio signal",
      "explanation": "Wireless signal strength decreases with distance and obstacles.",
      "difficulty": "easy",
      "tags": [
        "wireless",
        "signal"
      ]
    },
    {
      "id": "sim-038",
      "category": "Troubleshooting",
      "source": "generated_similar",
      "question": "Which command should you use first to test basic connectivity to another host?",
      "choices": [
        "ping",
        "format",
        "copy run start",
        "show startup-config"
      ],
      "answer": "ping",
      "explanation": "Ping uses ICMP echo messages to test reachability.",
      "difficulty": "easy",
      "tags": [
        "ping",
        "troubleshooting"
      ]
    },
    {
      "id": "sim-039",
      "category": "Troubleshooting",
      "source": "generated_similar",
      "question": "If ping to an IP address works but ping to a hostname fails, what is the likely problem?",
      "choices": [
        "DNS resolution",
        "Cable colour",
        "TCP window size",
        "MAC address aging"
      ],
      "answer": "DNS resolution",
      "explanation": "If IP connectivity works but names fail, DNS is the likely issue.",
      "difficulty": "medium",
      "tags": [
        "dns",
        "troubleshooting"
      ]
    },
    {
      "id": "sim-040",
      "category": "Troubleshooting",
      "source": "generated_similar",
      "question": "Which Windows command shows the ARP cache?",
      "choices": [
        "arp -a",
        "ipconfig /flushdns",
        "net user",
        "route delete"
      ],
      "answer": "arp -a",
      "explanation": "arp -a displays the local ARP cache.",
      "difficulty": "easy",
      "tags": [
        "windows",
        "arp"
      ]
    },
    {
      "id": "sim-041",
      "category": "Troubleshooting",
      "source": "generated_similar",
      "question": "Which Windows command can clear the DNS resolver cache?",
      "choices": [
        "ipconfig /flushdns",
        "arp -d",
        "route print",
        "netstat -r"
      ],
      "answer": "ipconfig /flushdns",
      "explanation": "ipconfig /flushdns clears cached DNS entries.",
      "difficulty": "easy",
      "tags": [
        "windows",
        "dns"
      ]
    },
    {
      "id": "sim-042",
      "category": "Routing",
      "source": "generated_similar",
      "question": "Which route is used when no more specific route matches a destination?",
      "choices": [
        "Default route",
        "Loopback route",
        "Broadcast route",
        "Host-only route"
      ],
      "answer": "Default route",
      "explanation": "The default route is the catch-all route.",
      "difficulty": "easy",
      "tags": [
        "routing",
        "default-route"
      ]
    },
    {
      "id": "sim-043",
      "category": "Routing",
      "source": "generated_similar",
      "question": "What does a router use to select the next hop?",
      "choices": [
        "Destination IP address and routing table",
        "Source MAC only",
        "HTTP method",
        "Computer hostname only"
      ],
      "answer": "Destination IP address and routing table",
      "explanation": "Routers forward based on the destination IP and their routing table.",
      "difficulty": "easy",
      "tags": [
        "routing"
      ]
    },
    {
      "id": "sim-044",
      "category": "Routing",
      "source": "generated_similar",
      "question": "What happens to the TTL value each time an IPv4 packet crosses a router?",
      "choices": [
        "It decreases by 1",
        "It increases by 1",
        "It changes to 255",
        "It becomes the port number"
      ],
      "answer": "It decreases by 1",
      "explanation": "Routers decrement the TTL to prevent packets looping forever.",
      "difficulty": "medium",
      "tags": [
        "ipv4",
        "ttl",
        "routing"
      ]
    },
    {
      "id": "sim-045",
      "category": "ICMP",
      "source": "generated_similar",
      "question": "Which protocol is used by ping?",
      "choices": [
        "ICMP",
        "SMTP",
        "FTP",
        "ARP"
      ],
      "answer": "ICMP",
      "explanation": "Ping uses ICMP Echo Request and Echo Reply.",
      "difficulty": "easy",
      "tags": [
        "icmp",
        "ping"
      ]
    },
    {
      "id": "sim-046",
      "category": "Cisco CLI",
      "source": "generated_similar",
      "question": "Which Cisco prompt indicates privileged EXEC mode?",
      "choices": [
        "Router#",
        "Router>",
        "Router(config)#",
        "Router(config-if)#"
      ],
      "answer": "Router#",
      "explanation": "The # prompt indicates privileged EXEC mode.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli"
      ]
    },
    {
      "id": "sim-047",
      "category": "Cisco CLI",
      "source": "generated_similar",
      "question": "Which Cisco prompt indicates user EXEC mode?",
      "choices": [
        "Router>",
        "Router#",
        "Router(config)#",
        "Router(config-line)#"
      ],
      "answer": "Router>",
      "explanation": "The > prompt indicates user EXEC mode.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli"
      ]
    },
    {
      "id": "sim-048",
      "category": "Cisco CLI",
      "source": "generated_similar",
      "question": "Which command saves the running configuration to startup configuration?",
      "choices": [
        "copy running-config startup-config",
        "show running-config",
        "reload",
        "erase startup-config"
      ],
      "answer": "copy running-config startup-config",
      "explanation": "copy running-config startup-config saves the active config to NVRAM.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli",
        "configuration"
      ]
    },
    {
      "id": "sim-049",
      "category": "Cisco CLI",
      "source": "generated_similar",
      "question": "Which command shows the current active configuration?",
      "choices": [
        "show running-config",
        "show startup-config",
        "copy run start",
        "enable secret"
      ],
      "answer": "show running-config",
      "explanation": "show running-config displays the active configuration in RAM.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli"
      ]
    },
    {
      "id": "sim-050",
      "category": "Cisco CLI",
      "source": "generated_similar",
      "question": "Which command enters interface configuration mode for GigabitEthernet0/0?",
      "choices": [
        "interface gigabitEthernet 0/0",
        "line console 0",
        "router ospf 1",
        "show ip interface brief"
      ],
      "answer": "interface gigabitEthernet 0/0",
      "explanation": "The interface command enters configuration mode for a specific interface.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli",
        "interfaces"
      ]
    },
    {
      "id": "sim-051",
      "category": "Cisco CLI",
      "source": "generated_similar",
      "question": "Which command enables an interface that is administratively down?",
      "choices": [
        "no shutdown",
        "shutdown",
        "enable secret",
        "copy run start"
      ],
      "answer": "no shutdown",
      "explanation": "no shutdown administratively enables an interface.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli",
        "interfaces"
      ]
    },
    {
      "id": "sim-052",
      "category": "Security",
      "source": "generated_similar",
      "question": "Which remote access protocol sends data in plaintext and should generally be avoided?",
      "choices": [
        "Telnet",
        "SSH",
        "HTTPS",
        "SFTP"
      ],
      "answer": "Telnet",
      "explanation": "Telnet does not encrypt the session.",
      "difficulty": "easy",
      "tags": [
        "telnet",
        "ssh",
        "security"
      ]
    },
    {
      "id": "sim-053",
      "category": "Security",
      "source": "generated_similar",
      "question": "Which Cisco command sets an encrypted privileged EXEC password?",
      "choices": [
        "enable secret",
        "enable password",
        "line console 0",
        "service password-encryption"
      ],
      "answer": "enable secret",
      "explanation": "enable secret stores the privileged EXEC password in hashed form.",
      "difficulty": "medium",
      "tags": [
        "cisco-cli",
        "passwords"
      ]
    },
    {
      "id": "sim-054",
      "category": "Security",
      "source": "generated_similar",
      "question": "What does an ACL do?",
      "choices": [
        "Permits or denies traffic based on rules",
        "Creates a DHCP scope",
        "Converts IPv4 to MAC",
        "Increases cable speed"
      ],
      "answer": "Permits or denies traffic based on rules",
      "explanation": "Access Control Lists match traffic and permit or deny it.",
      "difficulty": "easy",
      "tags": [
        "acl",
        "security"
      ]
    },
    {
      "id": "sim-055",
      "category": "NAT",
      "source": "generated_similar",
      "question": "What is the purpose of NAT overload, also called PAT?",
      "choices": [
        "Allow multiple private hosts to share one public IP using port numbers",
        "Encrypt all traffic",
        "Replace DNS",
        "Create VLAN trunks"
      ],
      "answer": "Allow multiple private hosts to share one public IP using port numbers",
      "explanation": "PAT maps many private addresses to one public address by tracking port numbers.",
      "difficulty": "medium",
      "tags": [
        "nat",
        "pat"
      ]
    },
    {
      "id": "sim-056",
      "category": "DHCP",
      "source": "generated_similar",
      "question": "What does DHCP provide to clients?",
      "choices": [
        "IP address configuration",
        "MAC address manufacturing",
        "Packet encryption",
        "Switching loops"
      ],
      "answer": "IP address configuration",
      "explanation": "DHCP can provide IP address, subnet mask, default gateway, DNS servers, and lease information.",
      "difficulty": "easy",
      "tags": [
        "dhcp"
      ]
    },
    {
      "id": "sim-057",
      "category": "DHCP",
      "source": "generated_similar",
      "question": "Which DHCP message is sent first by a client looking for an address?",
      "choices": [
        "DHCP Discover",
        "DHCP Offer",
        "DHCP Request",
        "DHCP ACK"
      ],
      "answer": "DHCP Discover",
      "explanation": "The DHCP process starts with a Discover message.",
      "difficulty": "medium",
      "tags": [
        "dhcp",
        "dora"
      ]
    },
    {
      "id": "sim-058",
      "category": "DHCP",
      "source": "generated_similar",
      "question": "What is the correct DHCP DORA order?",
      "choices": [
        "Discover, Offer, Request, Acknowledge",
        "Deliver, Open, Route, Apply",
        "Discover, Order, Reply, Accept",
        "DNS, Offer, Route, ARP"
      ],
      "answer": "Discover, Offer, Request, Acknowledge",
      "explanation": "DORA describes the normal DHCP lease process.",
      "difficulty": "medium",
      "tags": [
        "dhcp",
        "dora"
      ]
    },
    {
      "id": "sim-059",
      "category": "DNS",
      "source": "generated_similar",
      "question": "Which DNS record maps a hostname to an IPv4 address?",
      "choices": [
        "A record",
        "MX record",
        "PTR record",
        "TXT record"
      ],
      "answer": "A record",
      "explanation": "An A record maps a name to an IPv4 address.",
      "difficulty": "easy",
      "tags": [
        "dns",
        "records"
      ]
    },
    {
      "id": "sim-060",
      "category": "DNS",
      "source": "generated_similar",
      "question": "Which DNS record is used for mail servers?",
      "choices": [
        "MX",
        "A",
        "PTR",
        "AAAA"
      ],
      "answer": "MX",
      "explanation": "MX records identify mail exchangers for a domain.",
      "difficulty": "easy",
      "tags": [
        "dns",
        "email"
      ]
    },
    {
      "id": "sim-061",
      "category": "VLANs",
      "source": "generated_similar",
      "question": "What is a VLAN used for?",
      "choices": [
        "Separating a switch into logical networks",
        "Increasing CPU clock speed",
        "Replacing IP addressing",
        "Encrypting email"
      ],
      "answer": "Separating a switch into logical networks",
      "explanation": "VLANs split a Layer 2 switch into separate broadcast domains.",
      "difficulty": "easy",
      "tags": [
        "vlans",
        "switching"
      ]
    },
    {
      "id": "sim-062",
      "category": "VLANs",
      "source": "generated_similar",
      "question": "What is a trunk link used for?",
      "choices": [
        "Carrying traffic for multiple VLANs",
        "Connecting only one PC",
        "Blocking all broadcasts",
        "Changing TCP into UDP"
      ],
      "answer": "Carrying traffic for multiple VLANs",
      "explanation": "A trunk carries tagged traffic for multiple VLANs between switches or between a switch and router.",
      "difficulty": "medium",
      "tags": [
        "vlans",
        "trunking"
      ]
    },
    {
      "id": "sim-063",
      "category": "VLANs",
      "source": "generated_similar",
      "question": "Which standard is used for VLAN tagging on Ethernet trunks?",
      "choices": [
        "802.1Q",
        "802.11",
        "802.3af",
        "802.15"
      ],
      "answer": "802.1Q",
      "explanation": "802.1Q is the Ethernet VLAN tagging standard.",
      "difficulty": "medium",
      "tags": [
        "vlans",
        "802.1q"
      ]
    },
    {
      "id": "sim-064",
      "category": "Wireless",
      "source": "generated_similar",
      "question": "Which standard family is used for Wi-Fi?",
      "choices": [
        "802.11",
        "802.3",
        "802.1Q",
        "802.15.4"
      ],
      "answer": "802.11",
      "explanation": "IEEE 802.11 defines wireless LAN standards.",
      "difficulty": "easy",
      "tags": [
        "wireless",
        "wifi"
      ]
    },
    {
      "id": "sim-065",
      "category": "Ethernet",
      "source": "generated_similar",
      "question": "Which standard family is Ethernet?",
      "choices": [
        "802.3",
        "802.11",
        "802.1X",
        "802.15"
      ],
      "answer": "802.3",
      "explanation": "IEEE 802.3 defines Ethernet.",
      "difficulty": "easy",
      "tags": [
        "ethernet"
      ]
    },
    {
      "id": "sim-066",
      "category": "Ethernet",
      "source": "generated_similar",
      "question": "What does full duplex mean?",
      "choices": [
        "A device can send and receive at the same time",
        "Only one device can transmit at a time",
        "The link is wireless only",
        "Traffic is always encrypted"
      ],
      "answer": "A device can send and receive at the same time",
      "explanation": "Full duplex allows simultaneous sending and receiving.",
      "difficulty": "easy",
      "tags": [
        "ethernet",
        "duplex"
      ]
    },
    {
      "id": "sim-067",
      "category": "Ethernet",
      "source": "generated_similar",
      "question": "Why is CSMA/CD mostly considered legacy now?",
      "choices": [
        "Modern switched Ethernet uses full duplex and avoids collisions",
        "IPv6 removed Ethernet",
        "DNS replaced switching",
        "TCP stopped using ports"
      ],
      "answer": "Modern switched Ethernet uses full duplex and avoids collisions",
      "explanation": "Collisions were a shared half-duplex Ethernet problem. Modern switches use full duplex links.",
      "difficulty": "medium",
      "tags": [
        "ethernet",
        "csma-cd"
      ]
    },
    {
      "id": "sim-068",
      "category": "Security",
      "source": "generated_similar",
      "question": "What is the main difference between authentication and authorization?",
      "choices": [
        "Authentication verifies identity, authorization defines access",
        "Authentication logs events, authorization resolves DNS",
        "Authentication encrypts cables, authorization assigns MAC addresses",
        "They are the same thing"
      ],
      "answer": "Authentication verifies identity, authorization defines access",
      "explanation": "Authentication proves who you are. Authorization decides what you can access.",
      "difficulty": "easy",
      "tags": [
        "aaa",
        "security"
      ]
    },
    {
      "id": "sim-069",
      "category": "Security",
      "source": "generated_similar",
      "question": "In AAA, what does accounting track?",
      "choices": [
        "User activity and resource usage",
        "Only password length",
        "Cable signal strength",
        "Subnet mask size"
      ],
      "answer": "User activity and resource usage",
      "explanation": "Accounting records what authenticated users do.",
      "difficulty": "easy",
      "tags": [
        "aaa",
        "security"
      ]
    },
    {
      "id": "sim-070",
      "category": "Fault Tolerance",
      "source": "generated_similar",
      "question": "Why is redundancy important in network design?",
      "choices": [
        "It reduces the chance that one failure takes down the service",
        "It removes the need for IP addresses",
        "It makes all traffic broadcast",
        "It disables routing loops automatically"
      ],
      "answer": "It reduces the chance that one failure takes down the service",
      "explanation": "Redundancy gives alternate paths, devices, or services when one component fails.",
      "difficulty": "easy",
      "tags": [
        "redundancy",
        "design"
      ]
    },
    {
      "id": "sim-071",
      "category": "Troubleshooting",
      "source": "generated_similar",
      "question": "Which tool is best for viewing individual packets and protocol fields?",
      "choices": [
        "Wireshark",
        "Notepad",
        "Calculator",
        "Task Scheduler"
      ],
      "answer": "Wireshark",
      "explanation": "Wireshark is a packet analyser used to inspect captured network traffic.",
      "difficulty": "easy",
      "tags": [
        "wireshark",
        "packet-analysis"
      ]
    },
    {
      "id": "sim-072",
      "category": "Troubleshooting",
      "source": "generated_similar",
      "question": "If the link light is off on an Ethernet port, what should you check first?",
      "choices": [
        "Physical cable and port connection",
        "HTTP status code",
        "Email password",
        "DNS MX record"
      ],
      "answer": "Physical cable and port connection",
      "explanation": "No link light usually points to a physical layer problem first.",
      "difficulty": "easy",
      "tags": [
        "physical-layer",
        "troubleshooting"
      ]
    },
    {
      "id": "sim-073",
      "category": "Addressing",
      "source": "generated_similar",
      "question": "Which address identifies a device on a local Ethernet link?",
      "choices": [
        "MAC address",
        "Default route",
        "Port number",
        "DNS domain"
      ],
      "answer": "MAC address",
      "explanation": "MAC addresses are Layer 2 addresses used on the local link.",
      "difficulty": "easy",
      "tags": [
        "mac",
        "ethernet"
      ]
    },
    {
      "id": "sim-074",
      "category": "Addressing",
      "source": "generated_similar",
      "question": "Which address is used for end-to-end routing across networks?",
      "choices": [
        "IP address",
        "MAC address only",
        "HTTP status code",
        "VLAN name"
      ],
      "answer": "IP address",
      "explanation": "IP addresses are Layer 3 logical addresses used for routing between networks.",
      "difficulty": "easy",
      "tags": [
        "ip",
        "routing"
      ]
    },
    {
      "id": "sim-075",
      "category": "NAT",
      "source": "generated_similar",
      "question": "When a home router sends private LAN traffic to the internet, what does NAT usually change?",
      "choices": [
        "The source private IP to the router's public IP",
        "The destination website name to a MAC address",
        "The Ethernet cable type",
        "The TTL to unlimited"
      ],
      "answer": "The source private IP to the router's public IP",
      "explanation": "Outbound NAT translates private internal addresses to a public address.",
      "difficulty": "medium",
      "tags": [
        "nat"
      ]
    },
    {
      "id": "sim-076",
      "category": "Application Layer",
      "source": "generated_similar",
      "question": "Which protocol is used for simple file transfer and commonly uses UDP port 69?",
      "choices": [
        "TFTP",
        "FTP",
        "SFTP",
        "HTTP"
      ],
      "answer": "TFTP",
      "explanation": "TFTP is a simple file transfer protocol using UDP port 69.",
      "difficulty": "easy",
      "tags": [
        "ports",
        "tftp"
      ]
    },
    {
      "id": "sim-077",
      "category": "Application Layer",
      "source": "generated_similar",
      "question": "Which protocol uses TCP ports 20 and 21?",
      "choices": [
        "FTP",
        "SSH",
        "DNS",
        "POP3"
      ],
      "answer": "FTP",
      "explanation": "FTP uses port 21 for control and port 20 for data in active mode.",
      "difficulty": "easy",
      "tags": [
        "ports",
        "ftp"
      ]
    },
    {
      "id": "sim-078",
      "category": "Security",
      "source": "generated_similar",
      "question": "Which is more secure for remote administration: SSH or Telnet?",
      "choices": [
        "SSH",
        "Telnet"
      ],
      "answer": "SSH",
      "explanation": "SSH encrypts the session. Telnet is plaintext.",
      "difficulty": "easy",
      "tags": [
        "ssh",
        "telnet"
      ]
    },
    {
      "id": "sim-079",
      "category": "Cisco CLI",
      "source": "generated_similar",
      "question": "Which command sets the device hostname to R1?",
      "choices": [
        "hostname R1",
        "name R1",
        "set host R1",
        "router-name R1"
      ],
      "answer": "hostname R1",
      "explanation": "hostname changes the device name shown in the prompt.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli"
      ]
    },
    {
      "id": "sim-080",
      "category": "Cisco CLI",
      "source": "generated_similar",
      "question": "Which line configuration mode is used for console access?",
      "choices": [
        "line console 0",
        "line vty 0 4",
        "interface vlan 1",
        "router rip"
      ],
      "answer": "line console 0",
      "explanation": "line console 0 configures the local console port.",
      "difficulty": "easy",
      "tags": [
        "cisco-cli",
        "console"
      ]
    }
  ]
};
