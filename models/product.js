const mongoose=require("mongoose")



const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type: String,
        enum: ["male","female","other"],
        default:"male"
        // enum : ['NEW,'STATUS'],
        // default: 'NEW'
    }
})




const Product =mongoose.model("Product",productSchema)
module.exports={Product}
