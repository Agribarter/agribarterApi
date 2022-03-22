const FarmerRequest = require("../model/FarmerRequestModel");
const asyncHandler = require("express-async-handler");
const Crop = require("../model/CropModel");
const Input = require("../model/FarmerRequestInput");

// post route /api/farmer/
const createRequest = asyncHandler(async (req, res) => {
  const { farmerId, substance, quantity } = req.body;
  try {
    const makerequest = await FarmerRequest.create({
      farmerId,
      substance,
      quantity,
    });

    res.status(201).json(makerequest);
  } catch (error) {
    res.status(400).json(error);
  }
});

//post route /api/farmer/request
const requestInput = asyncHandler(async (req, res) => {
  try {
    const requestingInput = await Input.create(req.body);
    if (requestingInput) {
      res.status(201).json(requestingInput);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

//getall route /api/farmer/request
const getAllfarmerInputRequest = asyncHandler(async (req, res) => {
  try {
    const gettingFarmerInput = await Input.find().populate(
      "farmerId",
      "name email phone nextofkin contactAddress client"
    );
    res.status(200).json(gettingFarmerInput);
  } catch (error) {
    res.status(400).json(error);
  }
});

//getone route /api/farmer/request/:id
const getOneFarmerRequest = asyncHandler(async (req, res) => {
  try {
    const getting = await Input.findById(req.params.id).populate(
      "farmerId",
      "name email phone nextofkin contactAddress client"
    );
    res.status(200).json(getting);
  } catch (error) {
    res.status(400).json(error);
  }
});

//put one route /api/farmer/request/:id
const updatefarmerInput = asyncHandler(async (req, res) => {
  const { recieved } = req.body;
  try {
    Input.findByIdAndUpdate(req.params.id, req.body, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json(docs);
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

//delete one request routes /api/farmer/request/:id
const deleteFarmerInputRequest = asyncHandler(async (req, res) => {
  try {
    const dele = await Input.findByIdAndDelete(req.params.id);
    res.status(200).json(dele);
  } catch (error) {
    res.status(400).json(error);
  }
});

//post routes /api/farmer/crop
const PlantCrop = asyncHandler(async (req, res) => {
  try {
    const harvestStat = await Crop.create(req.body);
    if (harvestStat) {
      res.status(201).json(harvestStat);
    }
  } catch (error) {
    res.status.json(error);
  }
});

//put routes /api/farmer/harvest/id
const UpdateCropStatus = asyncHandler(async (req, res) => {
  try {
    const editing = await Crop.findByIdAndUpdate(req.params.id, req.body);
    const upd = await Crop.updateOne();
    res.status(201).json(editing);
  } catch (error) {
    res.status(400).json(error);
  }
});

//get request route /api/farmer/crop
const gettingAllCrop = asyncHandler(async (req, res) => {
  try {
    const allCrop = await Crop.find();
    res.status(200).json(allCrop).populate("farmerId", "name ");
  } catch (error) {
    res.status(400).json(error);
  }
});

//get request route /api/farmer/id
const getOneCrop = asyncHandler(async (req, res) => {
  try {
    const getOne = await Crop.findById(req.params.id);
    res
      .status(200)
      .json(getOne)
      .populate("farmerId", "name")
      .populate("investorId");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = {
  createRequest,
  PlantCrop,
  UpdateCropStatus,
  getAllfarmerInputRequest,
  getOneFarmerRequest,
  updatefarmerInput,
  requestInput,
  deleteFarmerInputRequest,
  gettingAllCrop,
  getOneCrop,
};
