const mongoose = require("mongoose");
const User = require("../model/UserModel");
const Crop = require("./CropModel");

const InvestorModel = new mongoose.Schema(
  {
    investorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },

    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    cropId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Crop,
    },
    amountpaid: {
      type: Number,
    },
    datepaid: {
      type: Date,
      default: Date.now(),
    },
    modeofpayment: {
      type: String,
    },

    returnOnInvestment: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Investor", InvestorModel);
