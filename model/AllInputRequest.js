const mongoose = require("mongoose");
const Input = require("./FarmerRequestInput");
const User = require("./UserModel");

const allInputRequest = new mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    allInput: [{ type: mongoose.Schema.Types.ObjectId, ref: Input }],
    collectionStatus: {
      type: String,
      default: "requested",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllInput", allInputRequest);
