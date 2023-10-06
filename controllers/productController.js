const {product, Product}=require("../models/product.js")
const path=require("path")

const productCreateController=async(req,res)=>{
   const filetype=req.files.image.mimetype.split("/")
  
if (filetype[1]==="pdf") {
  return res.status(400).json({message:"filetype must be jpg or png"})
}

   // req.files.image.mv("filesave",req.files.image.name)
  if (req.files.image.size>20000) {
   return res.status(400).json({message:"File size must be less than 10kb"})
  }
  
   const {productName,price,description,image,category}=req.body
 
   if (!productName||!price||!description||!image|| !category) {
       return res.status(400).json({error:"please filled all value"})
     }
  // try {
  //   const{name}=req.body
  //   const saveProduct=await Product.create({
  //     productName,
  //     price,
  //     description,
  //     image,
  //     category
  //   })
  //   if (saveProduct) {
  //     res.status(201).json({message:"data save successfully"})
  //   }
  // } catch (error) {
  //   console.log(error,"err")
  // }
}

const getSingleProduct=async(req,res)=>{
  const {id} =req.body
  console.log(id,'id')
   try {
    const product= await Product.findOne({ _id: id})
    .populate('category',  'name')
    // .exec()
    
   
    
   console.log(product)

return res.status(200).json(product)
    
   } catch (error) {
    console.log(error)
   }
  }



 module.exports={productCreateController,getSingleProduct}

  