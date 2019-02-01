const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  firstname_en: {
    type: String,
    required: true
  },
  surname_en: {
    type: String,
    required: true
  },
  firstname_kh: {
    type: String,
    required: true
  },
  surname_kh: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  acc_type: {
    type: String
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
