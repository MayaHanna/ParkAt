const Sequelize = require("sequelize");
const db = require("../database/connection");

const Merchant = db.define("merchants", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  merchantId: Sequelize.STRING,
  userEmailAddress: Sequelize.STRING,
  points: Sequelize.NUMBER
});

Merchant.associate = (models) => {
  // define association here
  Merchant.hasMany(models.PrivateParkingOffer, {
    foreignKey: {
      allowNull: false,
    },
  });
  Merchant.hasMany(models.Parking, {
    onDelete: "cascade",
  });

  Merchant.hasMany(models.FreeParkingArea, {
    onDelete: "cascade",
  });

  Merchant.hasMany(models.PrivateParkingOffer, {
    onDelete: "cascade",
  });

  Merchant.hasMany(models.PublicParkingOffer, {
    onDelete: "cascade",
  });
  Merchant.hasMany(models.Slot, {
    onDelete: "cascade",
  });
};

module.exports = Merchant;
