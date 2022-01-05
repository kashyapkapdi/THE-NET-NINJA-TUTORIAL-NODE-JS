let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "json") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/data.html").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("Server is the start at port number: 3000");
