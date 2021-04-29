const Sequelize = require("sequelize");
const db = require("../database/connection");
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
  parkingsCount: Sequelize.INTEGER(11),
});

FreeParkingArea.associate = (models) => {
  // Reporter
  FreeParkingArea.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });
};
// // Reporter fk
// FreeParkingArea.belongsTo(User, { foreignKey: "reporter" });

// FreeParkingArea.sync().then(() => {
//   console.log("FreeParkingArea table created");
// });
module.exports = FreeParkingArea;
