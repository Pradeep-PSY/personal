const express = require("express");
const connection = require("./config/db");
const bmiController = require("./controller/bmiController");
const userController = require("./controller/userController");
const authentication = require("./middleware/authentication");
require("dotenv").config();
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to  just started");
});

app.use("/user", userController);
app.use(authentication);
app.use('/bmi',bmiController);

app.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
  console.log("listening on port 9000");
});
