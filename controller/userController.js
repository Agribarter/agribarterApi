const asyncHandler = require("express-async-handler");
const User = require("../model/UserModel");
const generateToken = require("../config/generateToken");
const fs = require("fs");
const { url } = require("inspector");

//post route /api/user/register

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, email, password } = req.body;

  // if (!firstName || !email || !password) {
  //   res.status(400);
  //   throw new Error("Please fill in the required field");
  // }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(404);
    throw new Error("User already exist, login instead");
  }

  try {
    const user = await User.create(req.body);
    if (user) {
      res.status(201).json({
        ...user._doc,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User doesn't exist");
  }
  const confirmPassword = await user.matchPassword(password);
  if (user && confirmPassword) {
    res.status(201).json({
      ...user._doc,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//put route /api/user/update/:id
// const updateUserDetails = asyncHandler(async (req, res) => {
//   // const { email } = req.body;
//   const user = await User.findById(req.params.id);
//   if (uconst updateUserDetails = asyncHandler(async (req, res) => {
//   // const { email } = req.body;
//   const user = await User.findById(req.params.id);
//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.pic = req.body.pic || user.pic;
//     user.client = req.body.client || client;
//     user.businessType = req.body.businessType;

//     if (req.body.password) {
//       user.password = req.body.password;
//     }
//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       phone: updatedUser.phone,
//       email: updatedUser.email,
//       client: updatedUser.client,
//       contactAddress: updatedUser.contactAddress,
//       businessType: updatedUser.businessType,
//       nextofkin: updatedUser.nextofkin,
//       bankdetails: updatedUser.bankdetails,
//       farmsize: updatedUser.farmsize,
//       pic: updatedUser.pic,
//       farmneed: updatedUser.farmneed,
//       token: generateToken(updateUser._id),
//     });
//   } else {
//     res.status(404);
//     throw new Error("User not found");
//   }
// });ser) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.pic = req.body.pic || user.pic;
//     user.client = req.body.client || client;
//     user.businessType = req.body.businessType;

//     if (req.body.password) {
//       user.password = req.body.password;
//     }
//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       phone: updatedUser.phone,
//       email: updatedUser.email,
//       client: updatedUser.client,
//       contactAddress: updatedUser.contactAddress,
//       businessType: updatedUser.businessType,
//       nextofkin: updatedUser.nextofkin,
//       bankdetails: updatedUser.bankdetails,
//       farmsize: updatedUser.farmsize,
//       pic: updatedUser.pic,
//       farmneed: updatedUser.farmneed,
//       token: generateToken(updateUser._id),
//     });
//   } else {
//     res.status(404);
//     throw new Error("User not found");
//   }
// });

const updateUserDetails = asyncHandler(async (req, res) => {
  try {
    const updateme = await User.findByIdAndUpdate(req.params.id, req.body);
    if (updateme) {
      res.status(201).json(updateme);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = { registerUser, loginUser, updateUserDetails };
