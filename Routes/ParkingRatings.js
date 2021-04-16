const ParkingRatings = require("../Models/ParkingRating");
const router = require("express").Router();

// Get PrivateParkingOffers list
router.get("/", (req, res) => {
  ParkingRatings.findAll()
    .then((parkingRatings) => res.status(200).send(parkingRatings))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
