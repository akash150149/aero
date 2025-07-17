const express = require("express");
const router = express.Router();
const {
  createBooking,
  getUserBookings,
  cancelBooking
} = require("../controllers/bookingController");

const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, createBooking);           // Create a new booking
router.get("/", verifyToken, getUserBookings);          // Get user's bookings
router.delete("/:id", verifyToken, cancelBooking);      // Cancel booking

module.exports = router;
