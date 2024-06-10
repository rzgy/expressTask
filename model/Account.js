const { mongoose, model } = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: String,
  age: Number,
  image: String,
  description: String,
});

module.exports = mongoose.model("account", accountSchema);
