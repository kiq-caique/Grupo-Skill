const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 80,
  },
  birth: {
    type: String,
    required: true,
    maxlength: 8,
    minlength: 8,
  },
  cpf: {
    type: String,
    required: true,
    maxlength: 12,
    minlength: 11,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
