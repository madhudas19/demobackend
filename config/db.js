const mongoose =require("mongoose")





const dbconnection =()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/ecomshop", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
    console.log("database connected");
}).catch((err)=>{
  console.log(`db not connected ${err}`);
  process.exit(1)
})
}





module.exports={dbconnection}