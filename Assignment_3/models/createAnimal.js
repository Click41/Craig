const Animal = require("../models/animals.js");

const animalsToCreate = [
  {
    name: "Dog",
    description: "A man's best friend.",
    id: 1,
  },
  {
    name: "Cat",
    description: "Independent and curious animals.",
    id: 2,
  },
  {
    name: "Bald Eagle",
    description: "The symbol of America",
    id: 3,
},
{
    name: "Snake",
    description: "A reptile that slithers on the ground.",
    id: 4,
},
{
    name: "Fish",
    description: "A creature that lives in the water.",
    id: 5,
},
{
    name: "Spider",
    description: "An insect that has eight legs and eight eyes.",
    id: 6,
},
{
    name: "Ant",
    description: "An insect that is very small and can lift 10x its own weight.",
    id: 7,
},
{
    name: "Centipede",
    description: "An insect that has 100 legs.",
    id: 8,
},
{
    name: "Tiger",
    description: "A large cat that is orange with black stripes.",
    id: 9,
},
{
    name: "Human",
    description: "A creature that is the smartest on the planet.",
    id: 10,
},
];

Animal.bulkCreate(animalsToCreate)
  .then((animals) => {
    console.log("Animals created:", animals.map(animal => animal.toJSON()));
  })
  .catch((error) => {
    console.error("Unable to create animals:", error);
  });
