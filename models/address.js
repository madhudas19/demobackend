const mongoose=require("mongoose")



const addressSchema =new mongoose.Schema({
    vill:{
        type:String,
        required:true
    },
    po:{
        type:String,
        required:true
    },
    ps:{
        type:String,
        required:true
    }
})




const Address =mongoose.model("Address",addressSchema)
module.exports={Address}
