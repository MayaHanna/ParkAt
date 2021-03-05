const {getParkingsOffers} = require("../Controllers/parkings-offers");

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const parkingsOffers = await getParkingsOffers();
        res.status(200).send(parkingsOffers);
    } catch (e) {
        res.status(400).send("Error");
    }
});

module.exports = router;