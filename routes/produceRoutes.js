const express = require("express");
const {
  createProduce,
  editProduce,
  deleteProduce,
  getAllProduce,
  getOneProduce,
} = require("../controller/ProduceController");

const router = express();

router.post("/", createProduce);
router.get("/", getAllProduce);
router.get("/:id", getOneProduce);
router.put("/:id", editProduce);
router.delete("/:id", deleteProduce);

module.exports = router;
