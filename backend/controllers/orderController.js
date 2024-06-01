const orderModel = require("../models/orderModel");
const userModel=require("../../backend/models/userModel")

const Stripe=require("stripe");



const stripepayment=new Stripe(process.env.STRIPE_SECRET_KEY)
// placing order from frontend
exports.placeOrder= async(req,res) =>
    {

        try {
           const newOrder=new orderModel({

            userId:req.body.userId,
            items:req.body.itens
           }) 
        } catch (error) {
            
        }
    }