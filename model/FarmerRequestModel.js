const mongoose = require("mongoose");
const User = require("../model/UserModel");
const Input = require("./FarmerRequestInput");

const farmerRequestSchema = new mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },

    input: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Input,
      required: true,
    },

    quantity: {
      type: Number,
    },

    requestStatus: {
      type: String,
      default: "requested",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FarmerRequest", farmerRequestSchema);

// const mongoose = require("mongoose");
// const User = require("./UserModel");

// const requestSchema = new mongoose.Schema(
//   {
//     phoneNumber: {
//       type: String,
//     },
//     farmer: { type: mongoose.Schema.Types.ObjectId, ref: User },
//     input: { type: String },
//     quantity: { type: Number },
//   },
//   { timestamp: true }
// );

// module.exports = mongoose.model("Input", requestSchema);
