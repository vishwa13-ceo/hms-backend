const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const {
  createAppointment,
  updateAppointmentStatus,
  getAppointments,
  approveAppointment, // New function
} = require("../controllers/appointmentController");

// Create a new appointment (patient only)
router.post("/", auth(["patient"]), createAppointment);

// Update appointment status (doctor only)
router.patch("/:id", auth(["doctor"]), updateAppointmentStatus);

// Approve/reject appointment (receptionist only)
router.patch("/:id/approve", auth(["receptionist"]), approveAppointment);

// Get appointments for a user (patient/doctor/receptionist)
router.get("/", auth(["patient", "doctor", "receptionist"]), getAppointments);

module.exports = router;