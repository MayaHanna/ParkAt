const Users = require("../Models/User");
const router = require("express").Router();

// Get Users list
router.get("/", (req, res) => {
  Users.findAll()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
