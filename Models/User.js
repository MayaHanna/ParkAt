const Sequelize = require("sequelize");
const db = require("../config/database");

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

User.sync().then(() => {
  console.log("users table created");
});
module.exports = User;
