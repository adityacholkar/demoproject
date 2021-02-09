let mongoose = require("mongoose");

let PrincipleSchema = new mongoose.Schema(
  {
    principle: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Principle", PrincipleSchema);
