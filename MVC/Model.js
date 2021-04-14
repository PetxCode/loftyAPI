const { Double } = require("bson");
const { Int32 } = require("bson");
const mongoose = require("mongoose");

const schemaStructure = mongoose.Schema({
  country: {
    type: String,
    required: true,
    unique: [true, "This country already exist"],
  },
  name: {
    type: String,
    required: true,
    unique: [true, "This name already exist"],
  },
  rating: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("monies", schemaStructure);
