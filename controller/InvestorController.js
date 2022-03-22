const asyncHandler = require("express-async-handler");
const Investor = require("../model/investorModel");
const User = require("../model/UserModel");

//post route api/investor/invest
const Investing = asyncHandler(async (req, res) => {
  const { farmerId, cropId } = req.body;

  if (!farmerId || !cropId) {
    res.status(404);
    throw new Error("You must invest in a farmer");
  }
  try {
    const createInvestment = await Investor.create(req.body);
    if (createInvestment) {
      res.status(201).json(createInvestment);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

//get all routes /api/investor/invest
const getAllInvestment = asyncHandler(async (req, res) => {
  try {
    // const getCropDetails = await
    const gettingInvestment = await Investor.find()
      .populate(
        "farmerId",
        "name email phone nextofkin contactAddress client farmneed"
      )
      .populate("cropId", "name harvestStatus quantity amountInvested");

    if (gettingInvestment) {
      res.status(200).json(gettingInvestment).sort(createdAt);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

//get one router /api/investment/invest
const getOneInvestment = asyncHandler(async (req, res) => {
  // const { farmerId } = req.body;
  try {
    const gettingInvestment = await Investor.findById(req.params.id)
      .populate(
        "farmerId",
        "name email phone nextofkin contactAddress client farmneed"
      )
      .populate("cropId", "name harvestStatus quantity amountInvested");

    if (gettingInvestment) {
      res.status(200).json(gettingInvestment);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = { Investing, getAllInvestment, getOneInvestment };
