// List of animal descriptions in respect to index order in which the options are listed in the HTML file
const animalList = [
    "A man's best friend",
    "Independent and curious animals",
    "The symbol of America",
    "A reptile that slithers on the ground",
    "A lifeform that lives in the water",
    "An insect that has 8 legs and 8 eyes",
    "An insect that is very small and can lift 10x its own weight",
    "An insect that has 100 legs",
    "A large cat that is orange with black stripes",
    "An animal that is the smartest on the planet",
];

// Function that grabs the value of the selected option and outputs the description of the animal
function animalGrab() {
    const animal = document.getElementById("selectAnimal").value;
    const outputDiv = document.getElementById("output");

    outputDiv.textContent = animalList[animal - 1];
    console.log(animalList[animal - 1]);
}