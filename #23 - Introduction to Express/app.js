let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.listen(3000, () => {
  console.log("The server run on port 3000");
});
