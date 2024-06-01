const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    
    // lastname:{
    //     type:String,
    //     required:true,
    // },
  email:{
        type:String,
        required:true,
        unique:true
    },
  password:{
        type:String,
        required:true,
    },
    // image:{
    //     type:String
    // },
    token:{
        type:String,


    },
   
    // resetPasswordExpires:{
    //     type:Date,

    // },

    // additionalDetail:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:"Profile",
    // },
     
    cartData:{
        type:Object,
        default:{},
    },

  
   
},{minimize:false})

module.exports = mongoose.model("User",userSchema);