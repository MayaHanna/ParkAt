const Sequelize = require("sequelize");

module.exports = new Sequelize("ParkAtTest.cs.colman.ac.il", {
  host: "localhost",
  dialect: "mssql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
