const Sequelize = require("sequelize");

module.exports = new Sequelize("ParkAtTest", "parkat", "park306cs", {
  host: "ParkAtTest.cs.colman.ac.il",
  dialect: "mssql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
