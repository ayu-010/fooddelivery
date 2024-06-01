// auth chech token validity
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/*******************************************************Authentication*******************************************/
exports.auth = async (req, res, next) => {
  try {

    
    let token =
    req.cookies.token ||
    req.body.token ||
    (req.header("Authorization") && req.header("Authorization").replace("Bearer ", ""));



    // token missing
  
    console.log('Received token in auth middleware:', token);
    console.log("token inside auth is ",req.cookies.token);
    
    if (!token) {
      return res.status(401).json({
        sucess: false,
        message: "token missing",
      });
    }
    
    // verfiy token
    try {
      
      
      console.log("token inside auth is ",token);
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decode token inside middleware is",decode);
      //   imp line h pure project ki
      const userId = decode.id;
      req.userId=userId;
      next();
    } catch (error) {
      return res.status(401).json({
        sucess: false,
        message: "token is invalid",
      });
    }

  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "something went wrong while validating",
      user
    });
  }
};
