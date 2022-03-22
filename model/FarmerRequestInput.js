const mongoose = require("mongoose");
const User = require("./UserModel");

const FarmInputItem = new mongoose.Schema(
  {
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: User },
    input: { type: String, required: true },
    quantity: { type: Number, required: true },
    recieved: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Input", FarmInputItem);
