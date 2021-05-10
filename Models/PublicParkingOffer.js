const Sequelize = require("sequelize");
const db = require("../database/connection");

const PublicParkingOffer = db.define("public_parking_offers", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  price: Sequelize.INTEGER(5),
  start: Sequelize.TIME,
  end: Sequelize.TIME,
  creditor: Sequelize.INTEGER,
  parkingId: Sequelize.INTEGER,
});

PublicParkingOffer.associate = (models) => {
  // Creditor
  PublicParkingOffer.belongsTo(models.User, {
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
// PublicParkingOffer.belongsTo(Parking, { foreignKey: "parking_id" });

// // creditor fk
// PublicParkingOffer.belongsTo(User, { foreignKey: "creditor" });

// PublicParkingOffer.sync().then(() => {
//   console.log("PublicParkingOffers table created");
// });
module.exports = PublicParkingOffer;