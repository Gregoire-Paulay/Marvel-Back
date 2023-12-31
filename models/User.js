const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: { type: String, required: true },
  account: {
    username: {
      type: String,
      required: true,
    },
    avatar: Object,
  },
  token: String,
  hash: String,
  salt: String,
});

module.exports = User;
