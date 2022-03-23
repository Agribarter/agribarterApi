const asyncHandler = require("express-async-handler");
const User = require("../model/UserModel");
const Input = require("../model/FarmerRequestInput");

const getAllInputRequest = asyncHandler(async (req, res) => {
  try {
    const getInput = await Input.find();
    const { phoneNumber } = getInput;
    const getUser = await User.find({ phoneNumber }).select("-password");
    res.status(200).json({ ...getInput, ...getUser });
  } catch (error) {
    res.status(400).json(error);
  }
});

const getOneInputRequest = asyncHandler(async (req, res) => {
  try {
    const getOne = await Input.findById(req.params.id);
    const { phoneNumber } = getOne;
    const getUser = await User.find({ phoneNumber }).select("-password");
    res.status(200).json({ ...getOne, ...getUser });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = { getAllInputRequest, getOneInputRequest };
