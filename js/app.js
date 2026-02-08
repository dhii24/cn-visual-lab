const btn = document.getElementById("sendBtn");
const client = document.getElementById("client");
const server = document.getElementById("server");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
  status.textContent = "Client sends HTTP request...";
  client.classList.add("bg-blue-600");

  setTimeout(() => {
    client.classList.remove("bg-blue-600");
    server.classList.add("bg-green-600");
    status.textContent = "Server processes request...";
  }, 1000);

  setTimeout(() => {
    server.classList.remove("bg-green-600");
    status.textContent = "Server sends HTTP response ✅";
  }, 2000);
});

const dnsBtn = document.getElementById("dnsBtn");
const dnsClient = document.getElementById("dns-client");
const dnsServer = document.getElementById("dns-server");
const dnsIP = document.getElementById("dns-ip");
const dnsStatus = document.getElementById("dnsStatus");

dnsBtn.addEventListener("click", () => {
  dnsStatus.textContent = "Client queries DNS server...";
  dnsClient.classList.add("bg-purple-600");

  setTimeout(() => {
    dnsClient.classList.remove("bg-purple-600");
    dnsServer.classList.add("bg-yellow-500");
    dnsStatus.textContent = "DNS server resolving domain...";
  }, 1000);

  setTimeout(() => {
    dnsServer.classList.remove("bg-yellow-500");
    dnsIP.classList.add("bg-green-600");
    dnsStatus.textContent = "IP address returned ✅";
  }, 2000);

  setTimeout(() => {
    dnsIP.classList.remove("bg-green-600");
  }, 3000);
});

const tcpBtn = document.getElementById("tcpBtn");
const tcpClient = document.getElementById("tcp-client");
const tcpServer = document.getElementById("tcp-server");
const tcpStatus = document.getElementById("tcpStatus");

tcpBtn.addEventListener("click", () => {
  tcpStatus.textContent = "Client → SYN";
  tcpClient.classList.add("bg-blue-600");

  setTimeout(() => {
    tcpClient.classList.remove("bg-blue-600");
    tcpServer.classList.add("bg-yellow-500");
    tcpStatus.textContent = "Server → SYN-ACK";
  }, 1000);

  setTimeout(() => {
    tcpServer.classList.remove("bg-yellow-500");
    tcpClient.classList.add("bg-purple-600");
    tcpStatus.textContent = "Client → ACK";
  }, 2000);

  setTimeout(() => {
    tcpClient.classList.remove("bg-purple-600");
    tcpStatus.textContent = "Connection Established ✅";
  }, 3000);
});



const statusSelect = document.getElementById("statusSelect");
const statusBox = document.getElementById("statusBox");

statusSelect.addEventListener("change", () => {
  const code = statusSelect.value;

  statusBox.className =
    "mt-6 p-6 rounded text-lg font-semibold";

  if (code === "200") {
    statusBox.textContent = "200 OK — Request successful ✅";
    statusBox.classList.add("bg-green-600");
  } else if (code === "301") {
    statusBox.textContent = "301 Moved Permanently — Resource redirected 🔁";
    statusBox.classList.add("bg-blue-600");
  } else if (code === "404") {
    statusBox.textContent = "404 Not Found — Resource missing ❌";
    statusBox.classList.add("bg-red-600");
  } else if (code === "500") {
    statusBox.textContent =
      "500 Internal Server Error — Server failed 💥";
    statusBox.classList.add("bg-yellow-600");
  } else {
    statusBox.classList.add("hidden");
    return;
  }

  statusBox.classList.remove("hidden");
});
