const express = require("express");
const layouts = require("express-ejs-layouts");
const mysql = require("mysql2");

const animalController = require("./controllers/animalController");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(layouts);
app.set("port", process.env.PORT || 3000);

const db = mysql.createConnection({
  host: "localhost",
  user: "your_db_username",
  password: "your_db_password",
  database: "Animals"
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Successfully connected to MySQL database!");
  }
});

app.get("/", animalController.index);
app.get("/all", animalController.getAllAnimals);
app.get("/:id", animalController.respondJSON);

app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});
