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
});

ImagePath.associate = (models) => {
  // parkingId
  ImagePath.belongsTo(models.Parking, {
    foreignKey: {
      allowNull: false,
    },
  });
};

module.exports = ImagePath;
