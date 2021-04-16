const db = require("../config/database");
const Parking = require("../Models/Parking");

const router = require("express").Router();

// router.get("/", async (req, res) => {
//     try {
//         const parkings = await getParkings();
//         res.status(200).send(parkings);
//     } catch (e) {
//         res.status(400).send("Error");
//     }
// });

// Get parkings list
router.get("/", (req, res) => {
  Parking.findAll()
    .then((parkings) => res.status(200).send(parkings))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
