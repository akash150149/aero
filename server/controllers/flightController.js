const Flight = require("../models/Flight");

// Add a new flight (Admin only)
const addFlight = async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json({ message: "Flight added successfully", flight });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add flight" });
  }
};

// Get all available flights
const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
};

module.exports = { addFlight, getAllFlights };