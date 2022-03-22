const mongoose = require("mongoose");
const User = require("./UserModel");

const CropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },

    investorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    harvestStatus: {
      type: String,
      required: true,
      default: "Planting the crop",
    },

    quantity: {
      type: String,
      required: true,
      default: "not available",
    },
    amountInvested: {
      type: String,
      default: "none",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", CropSchema);
