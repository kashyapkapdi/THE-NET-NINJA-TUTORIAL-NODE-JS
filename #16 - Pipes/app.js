let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });

  let myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf-8");
  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("Server is the start at port number: 3000");
