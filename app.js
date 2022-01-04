let fs = require("fs");

let file = fs.readFileSync("./readme.txt", "utf8");

let writeFiles = fs.writeFileSync("write-Files.txt", file);
console.log(writeFiles);
