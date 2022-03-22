const mongoose = require("mongoose");

const produceModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
      type: Number,
    },

    delivered: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Produce", produceModel);
