const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  full_name: {
    type: Sequelize.STRING,
  },
  created_at: {
    type: Sequelize.TIME,
  },
  address: {
    type: Sequelize.STRING,
  },
  phone_number: {
    type: Sequelize.INTEGER,
  },
});

User.sync().then(() => {
  console.log("users table created");
});
module.exports = User;
