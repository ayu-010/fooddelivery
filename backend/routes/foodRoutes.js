const express = require("express");
const router = express.Router();

const { addFood, allFoodList, removeFoodList } = require("../controllers/FoodController");

router.post("/add", addFood); 
// multer for storage


router.get("/list",allFoodList)

router.delete("/remove/:id",removeFoodList)
module.exports = router;
