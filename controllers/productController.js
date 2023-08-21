
const {Product}=require("../models/product.js")



const productController=async(req,res)=>{
    const {name,phone,age,gender}=req.body
    console.log(name,phone,age,gender);
    if (!name||!phone||!age||!gender) {
        return res.status(400).json({error:"please filled all value"})
      }
    try {
      
     const {name}=req.body
     const saveProduct =await Product.create({
      name:name,
      phone:phone,
      age:age

    })
      if (saveProduct) {
        return res.status(201).json({message:"data save successfully"})
      }
    
    
    } catch (error) {
      console.log(error,"err");
    }
  }



 module.exports={productController}

  