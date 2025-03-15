const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { auth } = require("./middleware/auth"); // Correctly destructure the 'auth' function
const appointmentRoutes = require("./routes/appointmentRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const adminRoutes = require("./routes/adminRoutes");





dotenv.config();
const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.get("/", (req, res) => {
  res.send("Hospital Management System Backend");
});
console.log("Auth routes loaded");
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/admin", adminRoutes);

app.get("/api/test", auth(["admin"]), (req, res) => {
  res.json({ message: "This is a protected route" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));