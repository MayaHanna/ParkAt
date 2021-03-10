const Sequelize = require("sequelize");
const db = require("../config/database");

const Slot = db.define("slots", {
  id: {
    type: Sequelize.NUMBER,
  },
  start: {
    type: Sequelize.DATE,
  },
  end: {
    type: Sequelize.DATE,
  },
  identification_code: {
    type: Sequelize.NUMBER,
  },
});
// public_parking_offer fk
Parking.belongsTo(PublicParkingOffer, {
  foreignKey: "public_parking_offer",
  targetKey: "id",
});

// outgoing_user fk
Parking.belongsTo(User, { foreignKey: "outgoing_user", targetKey: "id" });

// incoming_user fk
Parking.belongsTo(User, { foreignKey: "incoming_user", targetKey: "id" });

Slot.sync().then(() => {
  console.log("Slots table created");
});
module.exports = Slot;
