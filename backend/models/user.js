const mongoose = require("mongoose"),
      uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: {type: String, required: true, unqiue: true},
  password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
