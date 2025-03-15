const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const {
  createPrescription,
  getPrescriptions,
} = require("../controllers/prescriptionController");

// Create prescription (doctor only)
router.post("/", auth(["doctor"]), createPrescription);

// Get prescriptions (patient/doctor)
router.get("/:appointmentId", auth(["patient", "doctor"]), getPrescriptions);

module.exports = router;