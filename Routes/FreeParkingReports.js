const FreeParkingReports = require("../Models/FreeParkingReport");
const router = require("express").Router();

// Get FreeParkingReports list
router.get("/", (req, res) => {
  FreeParkingReports.findAll()
    .then((freeParkingReports) => res.status(200).send(freeParkingReports))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
