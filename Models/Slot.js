const Sequelize = require("sequelize");
const db = require("../config/database");

const Slot = db.define("slots", {
  id: {
    type: Sequelize.NUMBER,
  },
  public_parking_offer: {
    type: Sequelize.NUMBER,
  },
  start: {
    type: Sequelize.DATE,
  },
  end: {
    type: Sequelize.DATE,
  },
  identification_code: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  outgoing_user: {
    type: Sequelize.NUMBER,
  },
  // need to setup fk
  incoming_user: {
    type: Sequelize.NUMBER,
  },
});

Slot.sync().then(() => {
  console.log("Slots table created");
});
module.exports = Slot;
