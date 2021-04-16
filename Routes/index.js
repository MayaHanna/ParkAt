const router = require("express").Router();
const example = require("./example");
const Parkings = require("./parkings");
const Slots = require("./Slots");
const FreeParkingAreas = require("./FreeParkingAreas");
const FreeParkingReports = require("./FreeParkingReports");
const ParkingComments = require("./ParkingComments");
const ParkingPictures = require("./ParkingPictures");
const ParkingRatings = require("./ParkingRatings");
const PrivateParkingOffers = require("./PrivateParkingOffers");
const Users = require("./Users");

router.use("/example", example);
router.use("/parkings", Parkings);
router.use("/Slots", Slots);
router.use("/FreeParkingAreas", FreeParkingAreas);
router.use("/FreeParkingReports", FreeParkingReports);
router.use("/ParkingComments", ParkingComments);
router.use("/ParkingPictures", ParkingPictures);
router.use("/ParkingRatings", ParkingRatings);
router.use("/PrivateParkingOffers", PrivateParkingOffers);
router.use("/Users", Users);

module.exports = router;
