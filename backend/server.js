const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("dotenv").config();

const PORT = process.env.PORT || 80;

app.use(cookieParser());

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000" ,
    credentials: true,
}));

app.use(cors());

const Routes=require("./routes/foodRoutes");
const userRoutes=require("./routes/userRoute");
const cartRoutes=require("./routes/cartRoute");
const orderRoutes=require("./routes/orderRoute");


require("./config/config").dbconnect();
const{cloudinaryConnect}=require('./config/cloudinary');

const fileUpload=require("express-fileupload");
cloudinaryConnect();

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)
app.use("/api/v1",Routes,userRoutes,cartRoutes,orderRoutes);






app.listen(PORT, () => {
    console.log(`Connection is done on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("This is a homepage");
});
