let express = require("express");

let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/data", (req, res) => {
  res.sendFile(__dirname + "/public/data.html");
});

app.get("/profile/:name", (req, res) => {
  let data = {
    age: 19,
    job: "Jr software Engineer",
    hobbies: ["games", "music", "coding"],
  };
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(3000, () => {
  console.log("The server run on port 3000");
});
