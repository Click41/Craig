const { DataTypes } = require("sequelize");
const sequelize = require("../public/js/sequelize"); // Import your Sequelize instance

const Animal = sequelize.define("Animal", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
});

module.exports = Animal;
