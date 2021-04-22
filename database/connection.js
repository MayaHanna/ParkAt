const Sequelize = require("sequelize");

const sequelize = new Sequelize("ParkAtTest", "parkat", "park306cs", {
  host: "db.cs.colman.ac.il",
  dialect: "mssql",
});

module.exports = sequelize;
global.sequelize = sequelize;
