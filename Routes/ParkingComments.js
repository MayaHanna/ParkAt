const ParkingComments = require("../Models/ParkingComment");
const router = require("express").Router();

// Get ParkingComments list
router.get("/", (req, res) => {
  ParkingComments.findAll()
    .then((parkingComments) => res.status(200).send(parkingComments))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
