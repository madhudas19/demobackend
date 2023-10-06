const mongoose=require("mongoose")

const { ObjectId } = mongoose.Schema;

const productSchema =new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required:true
        
    },
    category: {
         type:ObjectId,
         ref: 'Category' }
})




const Product =mongoose.model("Product",productSchema)
module.exports={Product}
