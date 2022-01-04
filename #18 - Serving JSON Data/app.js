let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  let jsonFile = fs.readFileSync("./dome.json", "utf-8");
  res.end(jsonFile);
});

server.listen(3000, "127.0.0.1");
console.log("Server is the start at port number: 3000");
