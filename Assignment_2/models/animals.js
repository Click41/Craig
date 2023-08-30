const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    // Same as index in the list and order of options in select box. Easy to use for database.
    id: { 
        type: Number, 
        required: true, 
        unique: true 
    },

});

module.exports = mongoose.model("Animal", animalSchema);