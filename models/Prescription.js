const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
  medicines: [{
    name: { type: String, required: true },
    dosage: { type: String, required: true },
  }],
  instructions: { type: String }, // Additional instructions for the patient
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Doctor's ID
});

module.exports = mongoose.model("Prescription", prescriptionSchema);