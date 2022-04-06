const mongoose = require("./db");
const EmergencyContacts = require("./EcForm");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: Number,
  emergencyContacts: { type: Array, EmergencyContacts },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
