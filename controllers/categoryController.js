const {Category}=require("../models/category")

const categoryCreateController=async(req,res)=>{
    const {name}= req.body 
    if (!name) {
        res.status(400).json({message:"Name field must be required"})
 
     } 
    try {
    const saveCategory=await Category.create({
        name:name
    })
    if (saveCategory) {
        return res.status(201).json({message:"Category save successfully"})
    }
    } catch (error) {
      console.log("err",error)  
    }
}

module.exports={categoryCreateController}