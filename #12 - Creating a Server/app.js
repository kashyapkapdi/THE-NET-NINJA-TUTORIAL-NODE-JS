let http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hey, kashyap");
});

server.listen(3000, "127.0.0.1");
console.log("Server is the start at port number: 3000");