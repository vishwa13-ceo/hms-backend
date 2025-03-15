const Appointment = require("../models/Appointment");

// Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { patient, doctor, date, notes } = req.body;
    const appointment = new Appointment({ patient, doctor, date, notes });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update appointment status (e.g., confirm or cancel)
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all appointments for a user (patient or doctor)
exports.getAppointments = async (req, res) => {
  try {
    const { role, id } = req.user;
    const query = role === "patient" ? { patient: id } : { doctor: id };
    const appointments = await Appointment.find(query).populate("patient doctor");
    res.json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Approve appointment (receptionist)
exports.approveAppointment = async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};