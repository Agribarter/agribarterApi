const express = require("express");
const {
  createCart,
  getAllCart,
  updateCart,
  addObjectToCart,
  getOneCart,
  removeObjectFromCart,
} = require("../controller/cartController.js");
const { protect } = require("../middlewares/authorizationMiddleware.js");

const router = express.Router();

router.post("/create", protect, createCart);
router.get("/", protect, getAllCart);
router.get("/:id", protect, getOneCart);
router.delete("/:id", protect, removeObjectFromCart);
router.put("/:id", protect, addObjectToCart);

module.exports = router;
