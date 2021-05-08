"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
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
    }
  }
  Merchant.init(
    {
      merchantId: DataTypes.STRING,
      userEmailAddress: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Merchant",
    }
  );
  return Merchant;
};
