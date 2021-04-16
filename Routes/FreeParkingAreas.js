const FreeParkingAreas = require("../Models/FreeParkingArea");
const router = require("express").Router();

// Get FreeParkingAreas list
router.get("/", (req, res) => {
  FreeParkingAreas.findAll()
    .then((freeParkingAreas) => res.status(200).send(freeParkingAreas))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
