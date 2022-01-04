let fs = require("fs");

fs.mkdir("asset", function () {
  fs.readFile("readme.txt", "utf8", function (err, data) {
    fs.writeFileSync("./asset/writeMe.txt", data);
  });
});
