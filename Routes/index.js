const router = require('express').Router();
const example = require("./example");
const parkings = require("./parkings");
const parkingReport = require("./parking-report");

router.use("/example", example);
router.use("/parkings", parkings);
router.use("/parkingReports", parkingReport);

module.exports = router;