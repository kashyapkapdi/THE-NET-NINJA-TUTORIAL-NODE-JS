let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.get("/profile/:id", (req, res) => {
  res.send(`The id is: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("The server run on port 3000");
});
