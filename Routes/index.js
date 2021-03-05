const router = require('express').Router();
const example = require("./example");
const parkings = require("./parkings");

router.use("/example", example);
router.use("/parkings", parkings);

module.exports = router;