const Food = require("../models/foodModel");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.addFood = async (req, res) => {
  try {
    const { name, description, category, price } = req.body;
    console.log("value inside backend",name,description,price,category);


    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.files && req.files.Foodimage);

    // new to do object create aur db me daal diya h
    const file = req.files && req.files.Foodimage;
    if (!file) {
      throw new Error("No file uploaded or incorrect file key");
    }
    console.log("FIle me kya h dekh lo bhai ", file);

    // file bhi lena jo hum  daalenge cloudinary mein
    // ek function bhi import karna padega jo ye kaam karega

    const uploadedImage = await uploadImageToCloudinary(
      file,
      process.env.FOLDER_NAME
    );

    const response = await Food.create({
      name,
      price,
      description,
      category,
      image: uploadedImage.secure_url,
    });
    console.log(response);
 return   res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
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

exports.allFoodList = async (req, res) => {
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

exports.removeFoodList = async (req, res) => {
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
