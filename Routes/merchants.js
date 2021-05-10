const { getMerchantIdByUserS } = require("../Services/merchants");
const { addPointsToMerchant } = require("../Controllers/merchants");
const { editMerchant } = require("../Controllers/merchants");
const { addMerchant } = require("../Controllers/merchants");
const { getMerchantByUser } = require("../Controllers/merchants");

const router = require("express").Router();

router.get("/byUser/:userMailAdress", async (req, res) => {
  try {
    const merchants = await getMerchantByUser(req.params.userMailAdress);
    res.status(200).send(merchants);
  } catch (e) {
    res.status(400).send("Error");
  }
});

router.post("/", async (req, res) => {
  const newMerchant = {
    ...req.body.formData,
  };

  try {
    const newMerchantAfterAdd = await addMerchant(newMerchant);
    res.status(200).send(newMerchantAfterAdd);
  } catch (e) {
    res.status(400).send("Error");
  }
});

router.put("/points", async (req, res) => {
  try {
    const newMerchant = await addPointsToMerchant(
      req.body.userMail,
      req.body.pointsToAdd
    );
    res.status(200).send(newMerchant);
  } catch (e) {
    res.status(400).send("Error");
  }
});

router.put("/", async (req, res) => {
  const newMerchant = {
    ...req.body.formData,
  };

  try {
    const newMerchantAfterEdit = await editMerchant(
      req.body.formData.userMail,
      newMerchant
    );
    res.status(200).send(newMerchantAfterEdit);
  } catch (e) {
    res.status(400).send("Error");
  }
});

module.exports = router;
