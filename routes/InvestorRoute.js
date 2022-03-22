const express = require("express");
const {
  Investing,
  getAllInvestment,
  getOneInvestment,
} = require("../controller/InvestorController.js");
const { protect } = require("../middlewares/authorizationMiddleware.js");

const router = express.Router();

router.post("/invest", protect, Investing);
router.get("/invest", protect, getAllInvestment);
router.get("/invest/:id", protect, getOneInvestment);

module.exports = router;
