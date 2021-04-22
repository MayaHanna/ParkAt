const Sequelize = require("sequelize");
const db = require("../config/database");
const PublicParkingOffer = require("./PublicParkingOffer");
const User = require("./User");

const Slot = db.define("slots", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  start: Sequelize.DATE,
  end: Sequelize.DATE,
  identification_code: Sequelize.INTEGER(10),
});
// // public_parking_offer fk
// Slot.belongsTo(PublicParkingOffer, {
//   // foreignKey: "public_parking_offer",
// });

// // outgoing_user fk
// Slot.belongsTo(User, { foreignKey: "outgoing_user" });

// // incoming_user fk
// Slot.belongsTo(User, { foreignKey: "incoming_user" });

Slot.sync().then(() => {
  console.log("Slots table created");
});
module.exports = Slot;
