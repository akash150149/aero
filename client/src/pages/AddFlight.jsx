import React, { useState } from "react";
import axios from "../axios";
// const token = localStorage.getItem("token"); // get JWT from login

// await axios.post(
//   "http://localhost:3001/api/flights/add",
//   formData,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   }
// );

const AddFlight = () => {
  const [formData, setFormData] = useState({
    flightNumber: "",
    from: "",
    to: "",
    departureTime: "",
    arrivalTime: "",
    seatsAvailable: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
  
      await axios.post(
        "/api/flights/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      alert("Flight added successfully ✅");
      setFormData({
        flightNumber: "",
        from: "",
        to: "",
        departureTime: "",
        arrivalTime: "",
        seatsAvailable: "",
        price: "",
      });
    } catch (error) {
      alert("Failed to add flight ❌");
      console.error(error);
    }
  };
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Flight</h2>
  <form className="space-y-4" onSubmit={handleSubmit}>
  <input
    name="flightNumber"
    value={formData.flightNumber}
    onChange={handleChange}
    className="w-full border rounded p-3"
    placeholder="Flight Number"
  />
  <input
    name="from"
    value={formData.from}
    onChange={handleChange}
    className="w-full border rounded p-3"
    placeholder="From"
  />
  <input
    name="to"
    value={formData.to}
    onChange={handleChange}
    className="w-full border rounded p-3"
    placeholder="To"
  />
  <input
    type="datetime-local"
    name="departureTime"
    value={formData.departureTime}
    onChange={handleChange}
    className="w-full border rounded p-3"
    placeholder="Departure Time"
  />
  <input
    type="datetime-local"
    name="arrivalTime"
    value={formData.arrivalTime}
    onChange={handleChange}
    className="w-full border rounded p-3"
    placeholder="Arrival Time"
  />
  <input
    type="number"
    name="seatsAvailable"
    value={formData.seatsAvailable}
    onChange={handleChange}
    className="w-full border rounded p-3"
    placeholder="Seats Available"
  />
  <input
    type="number"
    name="price"
    value={formData.price}
    onChange={handleChange}
    className="w-full border rounded p-3"
    placeholder="Price"
  />
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
  >
    Add Flight
  </button>
</form>
</div>
</div>

  );
};

export default AddFlight;