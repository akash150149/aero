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
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md py-4 px-6 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide hover:text-yellow-300 transition duration-200"
        >
          ✈️ WELCOME TO AERO
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 text-sm sm:text-base">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="hover:text-yellow-300 transition duration-200 font-medium"
          >
            Flights
          </Link>
          <Link
            to="/my-bookings"
            className="hover:text-yellow-300 transition duration-200 font-medium"
          >
            My Bookings
          </Link>

          {role === "admin" && (
            <Link
              to="/admin/add-flight"
              className="text-yellow-300 hover:text-white font-semibold transition duration-200"
            >
              + Add Flight
            </Link>
          )}

          {!token && (
            <Link
              to="/login"
              className="hover:text-yellow-300 transition duration-200 font-medium"
            >
              Login
            </Link>
          )}
        </div>

        {/* Logout Button */}
        {token && (
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
