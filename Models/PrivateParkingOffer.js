const Sequelize = require("sequelize");
const db = require("../config/database");
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
  // need to set it up to "end"
  can_be_permanent: Sequelize.BOOLEAN,
});

PrivateParkingOffer.associate = (models) => {
  // Creditor
  PrivateParkingOffer.belongsTo(models.User, {
    foreignKey: {
      alloNull: false,
    },
  });

  // Customer
  PrivateParkingOffer.belongsTo(models.User, {
    foreignKey: {
      alloNull: false,
    },
  });

  // ParkingID
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
