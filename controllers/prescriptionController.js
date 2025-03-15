const Prescription = require("../models/Prescription");

// Create a new prescription
exports.createPrescription = async (req, res) => {
  try {
    const { appointment, medicines, instructions } = req.body;
    const prescription = new Prescription({
      appointment,
      medicines,
      instructions,
      createdBy: req.user.id, // Doctor's ID from the token
    });
    await prescription.save();
    res.status(201).json(prescription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get prescriptions for a patient
exports.getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ appointment: req.params.appointmentId })
      .populate("appointment createdBy");
    res.json(prescriptions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};