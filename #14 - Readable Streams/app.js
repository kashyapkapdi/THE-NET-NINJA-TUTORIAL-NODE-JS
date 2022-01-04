let fs = require("fs");

let readStream = fs.createReadStream(__dirname + "/readme.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("new chunk received: ");
  console.log(chunk);
});
