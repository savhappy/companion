const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const router = require("./router");

const PORT = "3000";

app.use(cors());
app.use(express.json());
app.use(router);

//start server

app.listen(PORT, (e) => {
  if (e) return console.error(e);
  console.log(`server is running on ${PORT}`);
});
