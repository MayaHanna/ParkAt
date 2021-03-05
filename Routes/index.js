const router = require('express').Router();
const example = require("./example");
const parkings = require("./parkings");
const parkingsOffers = require("./parkings-offer");

router.use("/example", example);
router.use("/parkings", parkings);
router.use("/parkingsOffers", parkingsOffers);

module.exports = router;