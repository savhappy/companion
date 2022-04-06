const mongoose = require("./db");

const EmergencyContactsSchema = mongoose.Schema({
  name: String,
  phoneNumber: Number,
});

const EmergencyContacts = mongoose.model(
  "emergencyContacts",
  EmergencyContactsSchema
);

module.exports = EmergencyContacts;
