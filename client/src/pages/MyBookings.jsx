import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

     const res = await axios.get("http://localhost:3001/api/bookings/my-bookings", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


      setBookings(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load bookings. Please try again.");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4">
  <h2 className="text-3xl font-bold text-blue-700 mb-6">🛫 My Bookings</h2>
  {bookings.length === 0 ? (
  <p className="text-center text-gray-500">You have no bookings yet.</p>
) : (
  bookings.map((booking) =>
    booking.flightId ? (
      <div key={booking._id} className="bg-white border rounded-lg shadow p-6 mb-4">
        <h3 className="text-lg font-bold text-blue-600">{booking.flightId.flightNumber}</h3>
        <p className="text-gray-700">{booking.flightId.from} ➜ {booking.flightId.to}</p>
        <p className="text-sm text-gray-500">
          Departure: {new Date(booking.flightId.departureTime).toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">
          Seats: {booking.seats} | Total: ₹{booking.totalAmount}
        </p>
        <p className="text-xs text-gray-400 italic">
          Booked on: {new Date(booking.bookingDate).toLocaleDateString()}
        </p>
      </div>
    ) : null
  )
)}

</div>

  );
};

export default MyBookings;