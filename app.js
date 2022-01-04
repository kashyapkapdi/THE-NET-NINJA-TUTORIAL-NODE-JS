let fs = require("fs");

fs.readFile("./readme.txt", "utf8", (error, data) => {
  fs.writeFileSync("writeFiles1.txt", data);
});
