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
    res.status(400).send(e);
  }
});

router.get("/byOwner/:ownerId", async (req, res) => {
  try {
    const parkings = await getParkingsByOwnerS(req.params.ownerId);
    res.status(200).send(parkings);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/", async (req, res) => {
  const newParking = {
    ...req.body.formData,
  };

  try {
    const newParkingId = await addParkingS(newParking);
    res.sendStatus(200).send(newParkingId);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/comment", async (req, res) => {
  const comment = req.body.comment;
  const parkingId = req.body.parkingId;

  try {
    await addCommentToParkingS(parkingId, comment);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
