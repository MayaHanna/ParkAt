const { getParkingReport, addParkingReport } = require("../Controllers/parking-reports");

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const parkingReports = await getParkingReport();
        res.status(200).send(parkingReports);
    } catch (e) {
        res.status(400).send("Error");
    }
});

router.post("/", async (req, res) => {
    const newParkingReport = {
        ...req.body.formData,
    };

    try {
        await addParkingOffer(newParkingReport);
        res.status(200).send();
    } catch (e) {
        res.status(400).send("Error");
    }
});
module.exports = router;