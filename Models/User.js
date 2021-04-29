const Sequelize = require("sequelize");
const db = require("../database/connection");

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  full_name: Sequelize.STRING(300),
  created_at: Sequelize.TIME,
  address: Sequelize.STRING(300),
  phone_number: Sequelize.INTEGER(10),
});

User.associate = (models) => {
  User.hasMany(models.Parking, {
    onDelete: "cascade",
  });

  User.hasMany(models.FreeParkingArea, {
    onDelete: "cascade",
  });

  User.hasMany(models.PrivateParkingOffer, {
    onDelete: "cascade",
  });

  User.hasMany(models.PublicParkingOffer, {
    onDelete: "cascade",
  });
  User.hasMany(models.Slot, {
    onDelete: "cascade",
  });
};

module.exports = User;
