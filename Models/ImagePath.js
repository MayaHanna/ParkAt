const Sequelize = require("sequelize");
const db = require("../database/connection");

const ImagePath = db.define("images_paths", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  imagePath: Sequelize.STRING,
  parkingId: Sequelize.INTEGER,
  publisherName: Sequelize.STRING,
});

ImagePath.associate = (models) => {
  // parkingId
  ImagePath.belongsTo(models.Parking, {
    foreignKey: {
      allowNull: false,
    },
  });
  // publisher
  ImagePath.belongsTo(models.Merchant, {
    foreignKey: {
      allowNull: false,
    },
    targetKey: "userEmailAddress",
  });
};

module.exports = ImagePath;
