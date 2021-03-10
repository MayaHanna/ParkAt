const Sequelize = require("sequelize");
const db = require("../config/database");

const FreeParkingArea = db.define("free_parking_areas", {
  id: {
    type: Sequelize.NUMBER,
  },
  address: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  parkings_count: {
    type: Sequelize.NUMBER,
  },
});

// Reporter fk
Parking.belongsTo(User, { foreignKey: "reporter", targetKey: "id" });

FreeParkingArea.sync().then(() => {
  console.log("FreeParkingArea table created");
});
module.exports = FreeParkingArea;
