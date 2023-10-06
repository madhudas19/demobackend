
const {Address}=require("../models/address.js")



const addressCreateController=async(req,res)=>{
    const {vill,po,ps}=req.body
    console.log(vill,po,ps);
    if (!vill||!po||!ps) {
        return res.status(400).json({error:"please filled all value"})
      }
    try {
      
     const saveData =await Address.create({
      vill:vill,
      po:po,
      ps:ps
    })
      if (saveData) {
        return res.status(201).json({message:"data save successfully"})
      }
    
    
    } catch (error) {
      console.log(error,"err");
    }
  }


const allAddressController=async(req,res)=>{
  // console.log(req);
  try {
    const allData=await Address.find().sort('-updatedAt').limit(2)
      

    return res.status(200).json(allData)
  } catch (error) {
    console.log(error);
  }
}
const deleteAddress=async(req,res)=>{

  const {id}=req.body
 
  try {
     const allData=await Address.findOneAndDelete(id)
     
   if (allData) {
    return res.status(200).json({message:"data delete successfully"})
   }
  
  } catch (error) {
    console.log(error);
  }
}

 module.exports={addressCreateController,allAddressController,deleteAddress}


  