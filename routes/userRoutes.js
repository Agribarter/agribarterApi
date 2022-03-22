const express = require("express");
const {
  registerUser,
  loginUser,
  updateUserDetails,
} = require("../controller/userController");
const upload = require("../middlewares/multer");
const { protect } = require("../middlewares/authorizationMiddleware.js");
const uploadPhotos = require("../middlewares/uploadPhoto");

const router = express.Router();

// router.post("", );
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:id", protect, updateUserDetails);

module.exports = router;
