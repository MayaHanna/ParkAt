const Sequelize = require("sequelize");
const db = require("../database/connection");
const Parking = require("./Parking");
const User = require("./User");

const PrivateParkingOffer = db.define("parking_offers", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  price: Sequelize.INTEGER,
  start: Sequelize.DATE,
  end: Sequelize.DATE,
  status: Sequelize.STRING,
  canBePermanent: Sequelize.BOOLEAN,
  owner: Sequelize.STRING,
  parkingId: Sequelize.INTEGER,
  client: Sequelize.STRING,
});

PrivateParkingOffer.associate = (models) => {
  // Owner
  PrivateParkingOffer.belongsTo(models.Merchant, {
    foreignKey: {
      alloNull: false,
    },
  });

  // Client
  PrivateParkingOffer.belongsTo(models.Merchant, {
    foreignKey: {
      alloNull: false,
    },
  });

  // ParkingId
  PrivateParkingOffer.belongsTo(models.Parking, {
    foreignKey: {
      allowNull: false,
    },
  });
};

// // Parking_id fk
// PrivateParkingOffer.belongsTo(Parking, {
//   // foreignKey: "parking_id",
//   as: "parking",
// });

// // creditor fk
// PrivateParkingOffer.belongsTo(User, {
//   foreignKey: "creditor",
// });

// // customer fk
// PrivateParkingOffer.belongsTo(User, {
//   foreignKey: "customer",
// });

// PrivateParkingOffer.sync().then(() => {
//   console.log("PrivateParkingOffers table created");
// });
module.exports = PrivateParkingOffer;
