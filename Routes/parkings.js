const { getParkings, getParkingsByOwner } = require("../Controllers/parkings");

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const parkings = await getParkings();
        res.status(200).send(parkings);
    } catch (e) {
        res.status(400).send("Error");
    }
});

router.get("/byOwner/:ownerId", async (req, res) => {
    try {
        const parkings = await getParkingsByOwner();
        res.status(200).send(parkings);
    } catch (e) {
        res.status(400).send("Error");
    }
});

module.exports = router;