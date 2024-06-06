// animalController.js
const Animal = require("../models/animals");

module.exports = {
  index: async (req, res) => {
    try {
      const animals = await Animal.findAll();
      res.render("index", { animals: animals });
    } catch (error) {
      console.error("Error fetching animals:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  description: async (req, res) => {
    const animalId = req.params.id;

    if (animalId === "0" || !animalId) {
      return res.json({}); // Return empty response
    }

    try {
      const animal = await Animal.findOne({
        where: { id: animalId },
        attributes: ['description']
      });

      if (!animal) {
        return res.status(404).json({ error: "Animal not found" });
      }

      res.json({ description: animal.description });
    } catch (error) {
      console.error("Error fetching animal description:", error);
      res.status(500).json({ error: "An error occurred while fetching the description." });
    }
  },

  delete: async (req, res, db) => {
    const animalId = req.params.id;
    console.log('animalId:', animalId);
    try {
      await db.query('DELETE FROM animals WHERE id = ?', [animalId]);

    } catch (err) {
      res.redirect('/');
    }
  }

};
