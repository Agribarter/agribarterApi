const express = require("express");
const {
  requestInput,
  getOneFarmerRequest,
  updatefarmerInput,
  deleteFarmerInputRequest,
  getAllfarmerInputRequest,
  PlantCrop,
  UpdateCropStatus,
  gettingAllCrop,
  getOneCrop,
} = require("../controller/farmerController");

const { protect } = require("../middlewares/authorizationMiddleware.js");

const router = express.Router();

router.post("/request", protect, requestInput);
router.get("/request", protect, getAllfarmerInputRequest);
router.get("/request/:id", protect, getOneFarmerRequest);
router.put("/request/:id", protect, updatefarmerInput);
router.delete("/request/:id", protect, deleteFarmerInputRequest);
router.post("/crop", protect, PlantCrop);
router.put("/crop/:id", protect, UpdateCropStatus);
router.get("/crop", protect, gettingAllCrop);
router.get("/crop/:id", protect, getOneCrop);

module.exports = router;
