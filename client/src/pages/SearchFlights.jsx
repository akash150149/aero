import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchFlights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/flights");
        setFlights(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFlights();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {flights.map((flight) => (
      <div
        key={flight._id}
        className="bg-white shadow-md rounded-lg p-6 border hover:shadow-xl transition"
      >
        <h3 className="text-xl font-bold text-blue-600">{flight.flightNumber}</h3>
        <p className="text-gray-700">{flight.from} ➜ {flight.to}</p>
        <p className="text-gray-500 text-sm">
          Departure: {new Date(flight.departureTime).toLocaleString()}
        </p>
        <p className="text-green-600 font-semibold mt-2">₹{flight.price}</p>
        <button
          onClick={() => handleBook(flight._id , flight.price)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book
        </button>
      </div>
    ))}
  </div>
  
  );

  async function handleBook(flightId, price) {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to book a flight");
      return;
    }
  
    try {
      // Step 1: Create order on backend
      const orderRes = await axios.post(
        "http://localhost:3001/api/payment/create-order",
        { amount:price, }
      );
  
      const { order } = orderRes.data;
  
      // Step 2: Open Razorpay Checkout
      const options = {
        key: "rzp_test_85juhrHdnFtU91", // Replace with actual Razorpay key
        amount: order.amount,
        currency: order.currency,
        name: "Flight Booking",
        description: "Payment for flight seat",
        order_id: order.id,


        handler: async function (response) {
  const paymentId = response.razorpay_payment_id;

  await axios.post(
    "http://localhost:3001/api/bookings",
    {
      flightId,
      seats: 1,
      paymentId, // pass it here
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  alert("Booking successful ✅");
},
        prefill: {
          name: "Akash Poddar",
          email: "test@example.com",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Booking or Payment failed ❌");
      console.error(err);
    }
  }
}  

export default SearchFlights;