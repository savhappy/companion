const express = require("express");
const router = express.Router();

const controller = require("./controllers/users");

// router.get("/events", controller.getAllEvents);

// router.get("/events/:id", controller.getById);

router.post("/user", controller.postUser);

router.post("/emergencyContacts/:id", controller.postEC);

module.exports = router;
