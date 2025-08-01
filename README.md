# ✈️ Flight Booking Web App

A full-stack flight booking web application where users can search for available flights, register/login, and book seats. Admins can add and manage flights. Built using **MERN stack** (MongoDB, Express, React, Node.js).

---

## 📌 Features

- ✅ User registration and login (JWT authentication)
- 🔒 Secure backend with protected routes
- 🔎 Search available flights by source/destination
- 🧾 Book one or multiple seats for a selected flight
- 💳 Dummy payment integration (or mention if implemented)
- 📂 Admin panel to add/manage flight details
- 🧠 Role-based access control (`user`, `admin`)
- 📅 Booking history in “My Bookings” page

---

## 🛠️ Tech Stack

### 💻 Frontend:
- React.js
- Tailwind CSS
- React Router DOM
- Axios

### 🌐 Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- dotenv, cors, etc.

---

## 🧪 Folder Structure

<pre>
flight-booking-app/
├── backend/
│   ├── controllers/
│   │   └── flightController.js
│   │   └── paymentController.js
│   ├── models/
│   │   ├── Flight.js
│   │   ├── Payment.js
│   │   └── User.js
│   ├── routes/
│   │   ├── flightRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── userRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── FlightCard.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── AddFlight.jsx
│   │   │   ├── SearchFlights.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── .env
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package-lock.json

</pre>
---

## 🧰 Getting Started

### 📦 Prerequisites:
- Node.js
- MongoDB
- Git

### 🛠️ Backend Setup
```bash
cd server
npm install
# Set your MongoDB URI in .env
npm start

Firstly Register Yourself and then login using that same email id and password


💡 Future Improvements
✅ Add search filter by date/time

✅ Forgot Password addition

✅ Email notifications on booking

✅ Admin dashboard UI improvements


## 🖼️ Screenshots

### 🔹 Homepage
![Homepage](./public/home.png)

### 🔹 Booking Page
![Booking Page](./public/bookings.png)

### 🔹 Admin Panel
![Admin Panel](./public/addflight.png)

### 🔹 Flights
![Flights](./public/flights.png)


