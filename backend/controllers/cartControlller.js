const userModel = require("../models/userModel");


exports.addCart = async (req, res) => {
  try {
   
    const  userData=await userModel.findOne({_id:req.user.userId});
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    console.log("userData inside the add to cart finctionality is :",userData);

let cartdata=await userData.cartData;
if(!cartdata[req.body.itemId])
    {
        cartdata[req.body.itemId]=1
    }
    else{
        
        cartdata[req.body.itemId]+=1
   }
    

   await userModel.findByIdAndUpdate(req.user.userId,{cartdata});

   res.json({success:true,message:"added to cart"})
    
   

  } catch (err) {
    console.error(err);
    console.log(err);
 return   res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const response = await Food.find({});
    console.log(response);
   return res.status(200).json({
      success: true,
      data: response,
      message: "Entry displayed Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
   return res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

exports.removeCart = async (req, res) => {
    try {
      const {id} = req.params;
      const response = await Food.findByIdAndDelete({_id:id});
      console.log(response);
   return   res.status(200).json({
        success: true,
        data: response,
        message: "Entry deleted Successfully",
      });
    } catch (err) {
      console.error(err);
      console.log(err);
   return   res.status(500).json({
        success: false,
        data: "internal server error",
        message: err.message,
      });
    }
  };
