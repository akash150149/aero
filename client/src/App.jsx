// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchFlights from "./pages/SearchFlights";
import MyBookings from "./pages/MyBookings";
import AddFlight from "./pages/AddFlight";
// import Help from "./pages/Help";
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <h1>Airline Ticketing System</h1>
        <Routes>
          <Route path="/" element={<Register />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/admin/add-flight" element={<AddFlight />} />
          <Route path="/search" element={<SearchFlights />} />

        </Routes>

      </div>

      <div className="text-white bg-blue-500 p-4 rounded-lg">
  Tailwind is working 🚀
</div>

    </Router>
  );
}

export default App;
