# ✈️ Flight Booking App

A full-stack web application for flight booking built using the MERN stack. This app allows users to search for flights and make bookings, with seamless payment integration using Razorpay. Admins can log in securely to add and manage flights.

---

## 🚀 Features

### 👥 User Functionality
- 🔍 Search for flights by source, destination, and date
- 📄 View available flight listings
- 💳 Book flights and pay using Razorpay
- ✅ See confirmation with Razorpay `paymentId` after success

### 🔐 Admin Panel
- 🔑 Login securely to access admin dashboard
- ➕ Add new flights to the system
- 🗂️ View and manage flight listings

---

## 🧱 Tech Stack

| Layer     | Technology                              |
|-----------|------------------------------------------|
| Frontend  | React.js, Axios, React Router DOM       |
| Backend   | Node.js, Express.js                     |
| Database  | MongoDB, Mongoose                       |
| Payments  | Razorpay API                            |
| Styling   | Tailwind CSS / Plain CSS                |

---

## 📂 Project Directory Structure

flight-booking-app/
├── client/ # React Frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── AddFlight.jsx # Admin component to add flights
│ │ │ ├── SearchFlights.jsx # User component to search flights
│ │ │ ├── Login.jsx # Admin login component
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── index.css
│ └── package.json
│
├── server/ # Express Backend
│ ├── models/
│ │ ├── Flight.js # Flight model
│ │ ├── Payment.js # Payment model
│ ├── routes/
│ │ ├── flightRoutes.js # Routes for adding/searching flights
│ │ ├── paymentRoutes.js # Razorpay-related routes
│ ├── controllers/
│ │ ├── flightController.js
│ │ ├── paymentController.js
│ ├── middleware/
│ │ └── authMiddleware.js # For admin protection
│ ├── config/
│ │ └── db.js # MongoDB connection setup
│ ├── .env
│ ├── server.js
│ └── package.json
│
├── README.md
├── .gitignore

