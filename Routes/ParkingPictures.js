const ParkingPictures = require("../Models/ParkingPicture");
const router = require("express").Router();

// Get ParkingPictures list
router.get("/", (req, res) => {
  ParkingPictures.findAll()
    .then((parkingPictures) => res.status(200).send(parkingPictures))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
