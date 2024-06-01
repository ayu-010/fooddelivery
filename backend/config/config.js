const mongoose=require("mongoose");

require("dotenv").config();

exports.dbconnect=() =>
{
    mongoose.connect(process.env.MONGODB_URL,{
       useNewUrlParser:true,
       useUnifiedTopology:true,
    })

.then(() =>
{
    console.log("db connected sucessfully");
})
.catch( (error) =>
{
    console.log("error occured in connection");
    console.error(error);
    process.exit(1);
})
};