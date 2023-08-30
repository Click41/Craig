const mongoose = require("mongoose");
const express = require("express");
const layouts = require("express-ejs-layouts");

const animalController = require("./controllers/animalController");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(layouts);
app.set("port", process.env.PORT || 3000);

mongoose.connect("mongodb://127.0.0.1:27017/Animals");
const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to mongodb!");
});

app.get("/", animalController.index);
app.get("/all", animalController.getAllAnimals);
app.get("/:id", animalController.respondJSON);

app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});
