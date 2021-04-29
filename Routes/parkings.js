const {
  getParkingsS,
  getParkingsByOwnerS,
  addParkingS,
  addCommentToParkingS,
} = require("../Services/parkings");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const parkings = await getParkingsS();
    res.status(200).send(parkings);
  } catch (e) {
    res.status(400).send("Error");
  }
});

router.get("/byOwner/:ownerId", async (req, res) => {
  try {
    const parkings = await getParkingsByOwnerS(req.params.ownerId);
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
    await addParkingS(newParking);
    res.status(200).send();
  } catch (e) {
    res.status(400).send("Error");
  }
});

router.post("/comment", async (req, res) => {
  const comment = req.body.comment;
  const parkingId = req.body.parkingId;

  try {
    await addCommentToParkingS(parkingId, comment);
    res.status(200).send();
  } catch (e) {
    res.status(400).send("Error");
  }
});

module.exports = router;
