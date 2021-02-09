let mongoose = require("mongoose");

let ValueSchema = new mongoose.Schema(
  {
    value: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Value", ValueSchema);
