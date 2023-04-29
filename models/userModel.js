const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  referal_details: {
    type: String,
  },
});

const UserTable = new mongoose.model("UserTable", userModel);
module.exports = {
  UserTable,
};
