const mongoose = require("mongoose");
const Produce = require("./produceModel");
const User = require("./UserModel");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    basket: [{ type: mongoose.Schema.Types.ObjectId, ref: Produce }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
