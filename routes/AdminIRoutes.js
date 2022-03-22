const express = require("express");
const {
  getAllInputRequest,
  getOneInputRequest,
} = require("../controller/AdminInputDetailsController");

const router = express.Router();

router.get("/getinput", getAllInputRequest);
router.get("/getinput/:id", getOneInputRequest);

module.exports = router;
