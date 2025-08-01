const Booking = require("../models/Booking");
const Flight = require("../models/Flight");
const jwt = require("jsonwebtoken");

// Create booking
const createBooking = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { flightId, seats , paymentId } = req.body;

    const flight = await Flight.findById(flightId);
    if (!flight || flight.seatsAvailable < seats) {
      return res.status(400).json({ message: "Not enough seats available" });
    }

    const totalAmount = seats * flight.price;

    const booking = new Booking({
      userId: decoded.id,
      flightId,
      seats,
      totalAmount,
      paymentId,
    });

    await booking.save();

    flight.seatsAvailable -= seats;
    await flight.save();

    res.status(201).json({ message: "Booking successful", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to book flight" });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = req.user.id;

    const bookings = await Booking.find({ userId: decoded.id }).populate("flightId");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    await Booking.findByIdAndDelete(bookingId);
    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (err) {
    res.status(500).json({ error: "Cancel failed" });
  }
};

module.exports = { createBooking, getUserBookings, cancelBooking };