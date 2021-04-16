const Slot = require("../Models/Slot");
const router = require("express").Router();

// Get Slots list
router.get("/", (req, res) => {
  Slot.findAll()
    .then((slots) => res.status(200).send(slots))
    .catch((err) => res.render("error", { error: err }));
});

module.exports = router;
