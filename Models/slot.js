const Sequelize = require("sequelize");
const db = require("../database/connection");

const Slot = db.define("slots", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  start: Sequelize.DATE,
  end: Sequelize.DATE,
  publicParkingOfferId: Sequelize.INTEGER,
  incomingUser: Sequelize.INTEGER,
});

Slot.associate = (models) => {
  // PublicParkingOfferId
  Slot.belongsTo(models.PublicParkingOffer, {
    foreignKey: {
      allowNull: false,
    },
  });
  // Incoming
  Slot.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });
};
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
