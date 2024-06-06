const Animal = require("../models/animals");

module.exports = {

    create: async (req, res) => {
        res.render("create");
    },

    new: (req, res) => {
        const db = req.app.locals.db; 

        if (!db) {
            console.error('Database connection is not available.');
            res.status(500).send('Database connection is not available.');
            return;
        }

        try {
            const { id, name, description } = req.body;

            const createdAt = new Date();
            const updatedAt = new Date();

            const sql = 'INSERT INTO animals (id, name, description, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)';

            db.query(sql, [id, name, description, createdAt, updatedAt], (err, result) => {
                if (err) {
                    console.error('Error inserting into database:', err);
                    res.status(500).send('Error inserting into database');
                    return;
                }
                console.log('Inserted into database:', result);
                res.redirect('/'); 
            });
        } catch (error) {
            console.error('Error creating record:', error);
            res.status(500).send('Error creating record');
        }
    },

    update: async (req, res) => {
        try {
            const animals = await Animal.findAll();
            res.render("update", { animals: animals });
          } catch (error) {
            console.error("Error fetching animals:", error);
            res.status(500).send("Internal Server Error");
          }
    },

    updateAnimal: async (req, res) => {
        const db = req.app.locals.db;

        if (!db) {
            console.error('Database connection is not available.');
            res.status(500).send('Database connection is not available.');
            return;
        }

        try {
            const { id, name, description } = req.body;

            const updatedAt = new Date();

            const sql = 'UPDATE animals SET name = ?, description = ?, updatedAt = ? WHERE id = ?';

            db.query(sql, [name, description, updatedAt, id], (err, result) => {
                if (err) {
                    console.error('Error updating database:', err);
                    res.status(500).send('Error updating database');
                    return;
                }
                console.log('Updated database:', result);
                res.redirect('/update'); 
            });
        } catch (error) {
            console.error('Error updating record:', error);
            res.status(500).send('Error updating record');
        }
    },
};