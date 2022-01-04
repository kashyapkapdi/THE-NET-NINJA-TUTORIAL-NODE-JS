let fs = require("fs");

fs.unlink("./asset/writeMe.txt", () => {
  fs.rmdirSync("asset");
});
