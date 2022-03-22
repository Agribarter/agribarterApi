const Produce = require("../model/produceModel");
const asyncHandler = require("express-async-handler");

const createProduce = asyncHandler(async (req, res) => {
  try {
    const creatingProduce = await Produce.create(req.body);
    res.status(201).json(creatingProduce);
  } catch (error) {
    res.status(400).json(error);
  }
});

const getAllProduce = asyncHandler(async (req, res) => {
  try {
    const gettingAll = await Produce.find();
    res.status(200).json(gettingAll);
  } catch (error) {
    res.status(400).json(error);
  }
});

const getOneProduce = asyncHandler(async (req, res) => {
  try {
    const getOneById = await Produce.findById(req.params.id);
    res.status(200).json(getOneById);
  } catch (error) {
    res.status(400).json(error);
  }
});

const editProduce = asyncHandler(async (req, res) => {
  try {
    const editingProduce = await Produce.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(201).json(editingProduce);
  } catch (error) {
    res.status(400).json(error);
  }
});

const deleteProduce = asyncHandler(async (req, res) => {
  try {
    const deletingProduce = await Produce.findByIdAndDelete(req.params.id);
    res.status(200).json(deletingProduce);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = {
  createProduce,
  editProduce,
  deleteProduce,
  getAllProduce,
  getOneProduce,
};
