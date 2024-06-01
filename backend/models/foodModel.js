const mongoose=require("mongoose");

const FoodSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    
  description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true},
  price:{
        type:Number,
        required:true,
    },

    image:{
        type:String,
        required:true
    },
 


  
   
})

module.exports = mongoose.model("Food",FoodSchema);