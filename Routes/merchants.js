const { getMerchantIdByUser } = require("../Controllers/merchants");

const router = require("express").Router();

router.get("/byUser/:userMailAdress", async (req, res) => {
    try {
        const merchants = await getMerchantIdByUser(req.params.userMailAdress);
        res.status(200).send(merchants);
    } catch (e) {
        res.status(400).send("Error");
    }
});

module.exports = router;