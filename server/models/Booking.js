// server/models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  flightId: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
  seats: Number,
  totalAmount: Number,
  paymentId: { type: String },
  bookingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);