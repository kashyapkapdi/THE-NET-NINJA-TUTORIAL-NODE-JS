let express = require("express");

let app = express();

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  console.log(req.query);
  res.render("contact", { qs: req.query });
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
