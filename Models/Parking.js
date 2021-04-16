const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("../Models/User");

const Parking = db.define("parkings", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  is_private: {
    type: Sequelize.BOOLEAN,
  },
  address: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.ENUM,
    values: ["motorcycle", "small_car", "big_car", "truck", "bus"],
  },
  status: {
    type: Sequelize.ENUM,
    values: ["free", "taken", "unknown"],
  },
});

// Owner fk
Parking.belongsTo(User, { foreignKey: "owner" });

Parking.sync().then(() => {
  console.log("parking table created");
});
module.exports = Parking;
