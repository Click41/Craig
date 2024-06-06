const Animal = require("../models/animals");

module.exports = {

    create: async (req, res) => {
        res.render("create");
    },

    new: (req, res) => {
        const db = req.app.locals.db;  // Access the db connection from app locals

        if (!db) {
            console.error('Database connection is not available.');
            res.status(500).send('Database connection is not available.');
            return;
        }

        try {
            // Extract data from the request body
            const { id, name, description } = req.body;

            // Generate current timestamp for createdAt and updatedAt
            const createdAt = new Date();
            const updatedAt = new Date();

            // SQL query to insert data into the database
            const sql = 'INSERT INTO animals (id, name, description, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)';

            // Execute the query with the data from the request body
            db.query(sql, [id, name, description, createdAt, updatedAt], (err, result) => {
                if (err) {
                    console.error('Error inserting into database:', err);
                    res.status(500).send('Error inserting into database');
                    return;
                }
                console.log('Inserted into database:', result);
                res.redirect('/'); // Redirect the user after successful insertion
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
        const db = req.app.locals.db;  // Access the db connection from app locals

        if (!db) {
            console.error('Database connection is not available.');
            res.status(500).send('Database connection is not available.');
            return;
        }

        try {
            // Extract data from the request body
            const { id, name, description } = req.body;

            // Generate current timestamp for updatedAt
            const updatedAt = new Date();

            // SQL query to update data in the database
            const sql = 'UPDATE animals SET name = ?, description = ?, updatedAt = ? WHERE id = ?';

            // Execute the query with the data from the request body
            db.query(sql, [name, description, updatedAt, id], (err, result) => {
                if (err) {
                    console.error('Error updating database:', err);
                    res.status(500).send('Error updating database');
                    return;
                }
                console.log('Updated database:', result);
                res.redirect('/update'); // Redirect the user after successful update
            });
        } catch (error) {
            console.error('Error updating record:', error);
            res.status(500).send('Error updating record');
        }
    },
};