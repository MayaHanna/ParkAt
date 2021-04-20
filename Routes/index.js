const router = require('express').Router();
const example = require("./example");
const parkings = require("./parkings");
const parkingReport = require("./parking-report");
const parkingsOffers = require("./parkings-offer");
const merchants = require("./merchants");

router.use("/example", example);
router.use("/parkings", parkings);
router.use("/parkingReports", parkingReport);
router.use("/parkingsOffers", parkingsOffers);
router.use("/merchants", merchants);

module.exports = router;