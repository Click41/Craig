// Grabs the Animal model
const Animal = require("../models/animals");

module.exports = {
  // Function that renders the layout html page
  index: (req, res) => {
    res.render("layout");
  },
  
  // Function that pulls the id number from the url and renders the animal description in JSON format from MongoDB
  respondJSON: async (req, res) => {
    try {
      const id = req.params.id;

      // Converts string number to integer number
      const numericId = parseInt(id);
  
      // If the id is not a number, return an error
      if (isNaN(numericId)) {
        return res.status(400).json({ error: "Invalid id" });
      }
  
      const animal = await Animal.findOne({ id: numericId });
  
      // If the animal is not found, return an error
      if (!animal) {
        return res.status(404).json({ error: "Animal not found" });
      }
  
      res.json(animal);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Function that pulls all the animal data from MongoDB and renders them in JSON format
  getAllAnimals: async (req, res) => {
    const animals = await Animal.find();

    res.json(animals);
  }
};
