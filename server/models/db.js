const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/companionDB", (e) => {
  if (e) return console.log(e);
  console.log("connected to db");
});

module.exports = mongoose;
