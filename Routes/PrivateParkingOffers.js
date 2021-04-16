const PrivateParkingOffers = require("../Models/PrivateParkingOffer");
const router = require("express").Router();

// Get PrivateParkingOffers list
router.get("/", (req, res) => {
  PrivateParkingOffers.findAll()
    .then((privateParkingOffers) => res.status(200).send(privateParkingOffers))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
