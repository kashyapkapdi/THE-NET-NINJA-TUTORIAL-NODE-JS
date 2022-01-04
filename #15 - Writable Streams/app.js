let http = require("http");
let fs = require("fs");

let myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf-8");
let myWriteStream = fs.createWriteStream(__dirname + "/write-file.txt");

myReadStream.on("data", (chuck) => {
  console.log("new chuck received");
  myWriteStream.write(chuck);
});
