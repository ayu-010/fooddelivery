const express = require("express");
const router = express.Router();

const {addCart,getCart,removeCart } = require("../controllers/cartControlller");
const {auth}=require("../middleware/auth");



router.post("/addcart",auth, addCart); 
// router.post("/getcart",auth,getCart)
// router.post("/removecart",auth,removeCart)



module.exports = router;
