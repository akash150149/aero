const express = require("express");
const router = express.Router();
const { addFlight, getAllFlights } = require("../controllers/flightController");
const { verifyAdmin } = require("../middleware/authMiddleware");

router.post("/add", verifyAdmin, addFlight);

// POST /api/flights/add
// router.post("/add", addFlight);

// GET /api/flights
router.get("/", getAllFlights);

module.exports = router;