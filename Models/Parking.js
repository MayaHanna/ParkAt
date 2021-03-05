const Sequelize = require("sequelize");
const db = require("../config/database");

const Parking = db.define("parkings", {
  id: {
    type: Sequelize.NUMBER,
  },
  is_private: {
    type: Sequelize.BOOLEAN,
  },
  address: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  // need to setup enum
  size: {
    type: Sequelize.STRING,
  },
  // need to setup enum
  status: {
    type: Sequelize.STRING,
  },
  // need to setup fk
  owner: {
    type: Sequelize.NUMBER,
  },
});

Parking.sync().then(() => {
  console.log("parking table created");
});
module.exports = Parking;
