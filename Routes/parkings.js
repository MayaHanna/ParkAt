const { getParkings, getParkingsByOwner, addParking, addCommentToParking } = require("../Controllers/parkings");

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
        const parkings = await getParkingsByOwner(req.params.ownerId);
        res.status(200).send(parkings);
    } catch (e) {
        res.status(400).send("Error");
    }
});

router.post("/", async (req, res) => {
    const newParking = {
        ...req.body.formData,
    };

    try {
        await addParking(newParking);
        res.status(200).send();
    } catch (e) {
        res.status(400).send("Error");
    }
});

router.post("/comment", async (req, res) => {
    const comment = req.body.comment;
    const parkingId = req.body.parkingId;

    try {
        await addCommentToParking(parkingId, comment);
        res.status(200).send();
    } catch (e) {
        res.status(400).send("Error");
    }
});


module.exports = router;