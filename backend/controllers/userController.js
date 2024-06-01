
// const Profile=require("../../model/Profile")
const User=require("../../backend/models/userModel")
const bcrypt=require("bcrypt"); 
const jwt=require("jsonwebtoken");
const  validator = require("validator");

// const otpGenerator = require('otp-generator')
// const otpmodel=require("../../model/OTP");


// require("dotenv").config();


// exports.sendOTP=async(req,res) =>
// {
// try {
//      const{email}=req.body;
//      const userexist=await User.findOne({email});
//      if(userexist)
//      {
//         return res.status(401).json({
//             success:false,
//             message:"user already exist"
//         })
//      }

//    let otp= otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,
// lowerCaseAlphabets:false });

// console.log("otp genrated sucessfully which is ",otp);


// let otpexist=await otpmodel.findOne({otp:otp});

// while(otpexist)
// {
    
//     otp= otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,
//     lowerCaseAlphabets:false });
//      otpexist=await otpmodel.findOne({otp:otp});
// }

// const otpINdb=await otpmodel.create({
//     email,
//     otp,
// })

// console.log("oTP that is enterd in db is ",otpINdb);

// return res.status(200).json({
//     success:true,
//     message:"opt sent sucessfully check your mail",
//     otp:otp
// })

// } catch (error) {
    
// console.log(error);
// return res.status(500).json({
//     success:false,
//     message:error.message
// })
// }
// }


exports.signUp = async (req, res) => {
    try {
        const {
            name,
        
            email,
            password,
           
        } = req.body;

        console.log("before data validation fields are", name,  email, password);

        // Data validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // // Match both the password
        // if (password !== confirmPassword) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Password and confirm password are not matching",
        //     });
        // }

        // Checking existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(403).json({
                success: false,
                message: "User already exists",
            });
        }
        

        if(!validator.isEmail(email))
            {
                return res.json({sucess:false,
                    message:"plesase enter a valide email"
                })
            }

            if(password.length<8)
                {
                    return res.json({sucess:false,
                        message:"plesase enter a strong password"
                    })
                }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
         
        // const profileDetails=await Profile.create({
        //     gender:null,
        //     dateOfBirth:null,
        //     about:null,
        
        //     });

        
        const user = await User.create({
            name,
            
            email,
            password: hashedPassword,
          
        });

        // const payload={
        //     email:user.email,
        //     id:user._id,
        
        //    }
        //    const  token=jwt.sign(payload, process.env.JWT_SECRET,
        //     {expiresIn:"2h",
        //     });
                
              
             
        //     //   user=user.toObject();                     
        //       user.token=token;
           
        //      user.password=undefined;
        //      console.log("user inside the sign uop  function while gewnrating tokem is ",user);

        return res.status(200).json({
            success: true,
            message: "User is registered successfully",
        //    token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered, please try later",
        });
    }
};

 


exports.login=async(req,res) =>
    { 
        try{
           
            const {email,password}=req.body;
       
            if(!email || !password)
            {
                return res.status(400).json({
                    success:false,
                    message:"please fill all the detail carefully",
                });
            }
        console.log(email,password);
        const user= await User.findOne({email})
           
             console.log("user inside the login is ",user);
           
           
     
            if(!user)
            {
              return res.status(401).json({
                    success:false,
                    message:"user is not registered sign up first",
                });
            } 
    
               
    
            // verify password and generate a jwt token
            if(await bcrypt.compare(password,user.password))
            {    
                  
                const payload={
                    email:user.email,
                    id:user._id,
                
                   }
                //  password matched 
                // to genrate token we are using sign method in jwt library
                const  token=jwt.sign(payload, process.env.JWT_SECRET,
            {expiresIn:"2h",
            });
                
              
             
            //   user=user.toObject();                     
              user.token=token;
           
             user.password=undefined;
            //  console.log("user inside the login function while gewnrating tokem is ",user);
            
    
    
                  const options={
                       expiresIn:new Date(Date.now() + 3*24*60*60*1000),
                       httpOnly:true,
                  }
    
                  console.log('Generated token:', token);
             return res.cookie("token",token,options).status(200).json({
                    success:true,
                    token,
                    user,
                    message:"user logged in  sucessfuly",
                  });
            }
    
            else{
                // password do not matched
                return res.status(401).json({
                    success:false,
                    message:"Password Incorrect",
                });
            }
        }
        catch(error)
        {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"login failure",
    });
        }
    };

