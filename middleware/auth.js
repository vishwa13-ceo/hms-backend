const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.auth = (roles = []) => async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user || (roles.length && !roles.includes(user.role))) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    req.user = user; // Attach user to request
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};