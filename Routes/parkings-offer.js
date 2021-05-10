const {
  getParkingOffersS,
  addParkingOfferS,
  editParkingOfferS,
} = require("../Services/parkingOffers");
const https = require("https");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const parkingsOffers = await getParkingOffersS();
    res.status(200).send(parkingsOffers);
  } catch (e) {
    res.status(400).send("Error");
  }
});

router.post("/", async (req, res) => {
  const newParkingOffer = {
    ...req.body.formData,
  };
  const userEmailAddress = req.body.userEmailAddress;

  try {
    await addParkingOfferS(newParkingOffer, userEmailAddress);
    res.status(200).send();
  } catch (e) {
    res.status(400).send("Error");
  }
});

router.put("/", async (req, res) => {
  const parkingOfferId = req.body.id;
  const newParkingOfferFields = {
    ...req.body.formData,
  };

  try {
    await editParkingOfferS(parkingOfferId, newParkingOfferFields);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).send("Error");
  }
});

module.exports = router;
