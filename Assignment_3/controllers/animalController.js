const Animal = require("../models/animals");

module.exports = {
  index: (req, res) => {
    res.render("layout");
  },

  description: async (req, res) => {
    const animalId = req.params.id;

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
};
