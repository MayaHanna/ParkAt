const Sequelize = require("sequelize");
const db = require("../database/connection");
const Parking = require("./Parking");
const User = require("./User");

const PrivateParkingOffer = db.define("private_parking_offers", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  price: Sequelize.INTEGER(10),
  start: Sequelize.TIME,
  end: Sequelize.TIME,
  parkingId: Sequelize.INTEGER,
  merchantId: Sequelize.STRING(200),
  client: Sequelize.STRING,
});

PrivateParkingOffer.associate = (models) => {
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

  // MerchantId
  PrivateParkingOffer.belongsTo(models.Merchant, {
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
