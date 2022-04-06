const User = require("../models/users");

// exports.getAllEvents = async (req, res) => {
//   try {
//     const event = await Event.find();
//     res.status(200);
//     res.send(event);
//   } catch (e) {
//     console.log(e);
//     res.status = 500;
//   }
// };

// exports.getById = async (request, response) => {
//   try {
//     const event = await Event.findById(request.params.id);
//     response.send({ event: event });
//   } catch (error) {
//     response.status(500).send(error);
//   }
// };

exports.postUser = async (req, res) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    });
    res.status(201);
    res.send("user created");
  } catch (e) {
    console.log(e);
    res.status = 500;
  }
};
exports.postEC = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const userEC = await User.findById(id);
    const EC = userEC.emergencyContacts;
    EC.push({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
    });
    await User.findByIdAndUpdate(id, { emergencyContacts: EC });

    console.log(req.body);
    res.status(201);
    res.send("ec created");
  } catch (e) {
    console.log(e);
    res.status = 500;
  }
};

// exports.deleteEvent = async (request, response) => {
//   try {
//     const event = await Event.findByIdAndDelete(request.params.id);
//     response.send(`deleted event ${request.params.id}`);

//     if (!event) response.status(404).send("No item found");
//     response.status(200).send();
//   } catch (error) {
//     response.status(500).send(error);
//   }
// };
