let express = require("express");

let app = express();

// setup template engine
app.set("view engine", "ejs");

// static files
app.use(express.static("./public"));
