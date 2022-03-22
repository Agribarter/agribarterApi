const asyncHandler = require("express-async-handler");
const Cart = require("../model/cartModel");
const User = require("../model/UserModel");

const createCart = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  try {
    if (!userId) {
      res.status(404);
      throw new Error("Login to continue shopping");
    }
    const creatingRoute = await Cart.create(req.body);
    res.status(201).json(creatingRoute);
  } catch (error) {
    res.status(400).json(error);
  }
});

const getAllCart = asyncHandler(async (req, res) => {
  try {
    const gettingCart = await Cart.find()
      .populate("userId", "email contactAddress")
      .populate("basket");
    res.status(200).json(gettingCart);
    // .populate("basket");
  } catch (error) {
    res.status(400).json(error);
  }
});

const addObjectToCart = asyncHandler(async (req, res) => {
  const { basket, userId } = req.body;
  try {
    const getUserCart = await Cart.find({ userId });
    console.log(getUserCart);
    if (getUserCart) {
      // console.log(getUserCart[0].basket.length);
      const getBasket = getUserCart[0].basket;
      const addingObject = [...getBasket, ...basket];
      const updateCart = await Cart.findById(req.params.id);
      console.log("updateCart", updateCart.basket);
      updateCart.basket = addingObject;
      console.log("updateCart", updateCart.basket);
      const savedCart = await updateCart.save();
      res.status(200).json(savedCart);
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
});

const removeObjectFromCart = asyncHandler(async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const getUserCart = await Cart.find({ userId });
    if (getUserCart) {
      console.log(getAllCart[0].basket.length);
      const getBasket = getUserCart[0].basket;
      const removeProduct = getBasket.filter(id !== productId);
      const updateCart = await Cart.findById(req.params.id);
      updateCart.basket = removeProduct;
      const savedCart = await updateCart.save();
      res.status(200).json(savedCart);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

const getOneCart = asyncHandler(async (req, res) => {
  try {
    const gettingCart = await Cart.findById(req.params.id)
      .populate("userId")
      .populate("basket");
    if (gettingCart) {
      res.status(200).json(gettingCart);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = {
  createCart,
  getAllCart,
  addObjectToCart,
  getOneCart,
  removeObjectFromCart,
};
