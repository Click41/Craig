require("dotenv").config();
const express = require("express");
const layouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const mysql = require("mysql2");
const animalController = require("./controllers/animalController");
const createController = require("./controllers/createController.js");

require("./models/animals.js")
require("./models/createAnimal.js")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(layouts);
app.set("port", process.env.PORT || 3000);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.locals.db = db;
app.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));


//routes
app.get("/", animalController.index);
app.get("/description/:id", animalController.description);
app.delete("/delete/:id", (req, res) => {
  animalController.delete(req, res, db);
});

app.route("/create")
  .get(createController.create)
  .post(createController.new);

app.route("/update")
  .get(createController.update)
  .post(createController.updateAnimal);

app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});