const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    homeType: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    scope: {
      type: String,
      trim: true
    },
    source: {
      type: String,
      enum: ["hero", "consultation"],
      default: "hero"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
