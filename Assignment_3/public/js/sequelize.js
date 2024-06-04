const { Sequelize } = require("sequelize");

try {
  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    sync: { force: false },

  });

  module.exports = sequelize;
} catch (error) {
  console.error("Error initializing Sequelize:", error);
}
