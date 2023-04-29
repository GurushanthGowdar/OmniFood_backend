const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { UserTable } = require("./models/userModel");
const cors = require("cors");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Nikitha_backend");

app.get("/TestServerConnection", (req, res) => {
  res.send("server Connected");
});

app.post("/signUp", async (req, res) => {
  console.log(req.body);
  const { user, email, referal_details } = req.body;
  console.log("recieved data");
  const userData = await new UserTable({
    name: user,
    email: email,
    referal_details: referal_details,
  });
  await userData.save();
  res.json({
    data: userData,
  });
});

app.get("/getUsersdata", async (req, res) => {
  const data = await UserTable.find();
  res.json({
    status: true,
    data: data,
    msg: "fetched all users data",
  });
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
