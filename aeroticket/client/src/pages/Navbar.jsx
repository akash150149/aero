import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let role = "";

  // Decode JWT to extract role
  if (token) {
    try {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      role = decoded.role;
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 
    navigate("/login");
  };

  return (
    <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#f0f0f0" }}>
      <div className="container mx-auto flex justify-between items-center">
      <div className="space-x-4 flex items-center">
  <Link to="/" className="hover:underline">Home</Link>
  <Link to="/search" className="hover:underline">Flights</Link>
  <Link to="/my-bookings" className="hover:underline">My Bookings</Link>

  {role === "admin" && (
    <Link to="/admin/add-flight" className="hover:underline text-yellow-300 font-medium">Add Flight</Link>
  )}

  {!token && <Link to="/login" className="hover:underline">Login</Link>}
</div>
    </div>

    {token && (
  <button
    onClick={handleLogout}
    className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  >
    Logout
  </button>
)}

    </nav>
  );
};

export default Navbar;
