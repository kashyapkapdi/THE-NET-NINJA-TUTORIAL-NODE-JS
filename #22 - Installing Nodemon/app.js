let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/public/index.html").pipe(res);
  } else if (req.url === "/data") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/public/data.html").pipe(res);
  } else if (req.url === "/api/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let jsonFile = fs.readFileSync("/public/dome.json", "utf-8");
    res.end(JSON.stringify(jsonFile));
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/public/error.html").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("Server is the start at port number: 3000");
