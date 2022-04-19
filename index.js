const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/appRoutes");

//create express app
const app = express();

//mongo db uri
const dbURI = process.env.MONGO_URI;

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

//access static files and css --middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use(routes);

// 404 page-has to be at the bottom of the page because execution is sequential
app.use((req, res) => {
  res.status(404).render("404");
});
