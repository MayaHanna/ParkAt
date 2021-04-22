const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("./User");

const FreeParkingArea = db.define("free_parking_areas", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  address: Sequelize.STRING(300),
  description: Sequelize.STRING(1000),
  parkings_count: Sequelize.INTEGER(11),
  reporterId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: "User",
      key: "id",
    },
  },
});

FreeParkingArea.associate = function (models) {};
// // Reporter fk
// FreeParkingArea.belongsTo(User, { foreignKey: "reporter" });

// FreeParkingArea.sync().then(() => {
//   console.log("FreeParkingArea table created");
// });
module.exports = FreeParkingArea;
