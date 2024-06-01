const express = require("express");
const router = express.Router();

const { signUp,login } = require("../controllers/userController");

router.post("/signup", signUp); 
// multer for storage


router.post("/login",login)


module.exports = router;
