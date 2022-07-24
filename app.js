const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const homeRoute = require("./routes/home");
const workRoute = require("./routes/work");
var day;
var Items = [];
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));


app.use(homeRoute);
app.use(workRoute);

app.listen(3000, (req, res) => {
  console.log("Lisening port 3000 ");
});
