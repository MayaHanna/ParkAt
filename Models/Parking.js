const Sequelize = require("sequelize");
const db = require("../config/database");

const Parking = db.define("parkings", {
  id: {
    type: Sequelize.NUMBER,
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
Parking.belongsTo(User, { foreignKey: "owner", targetKey: "id" });

Parking.sync().then(() => {
  console.log("parking table created");
});
module.exports = Parking;
