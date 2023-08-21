
const {User}=require("../models/user.js")



const registerController=async(req,res)=>{
    const {name,phone,age}= req.body
    console.log(name,phone,age);
   
 try {
    //  if (!name || !phone || !age) {
    //   return   res.status(400).json({error:" please field all value"})
     
    //     }
       const findEmail = await User.findOne({phone})
       if (findEmail) {
       return  res.status(400).json({error:" email already register"})
       }
       const saveUser = await User.create({name,phone,age})
     if (saveUser) {
     return    res.status(200).json({message:" data save successfully"}) 
     }
     
     
     
 } catch (error) {
     console.log(error);
 }
 
 
 
 }









 module.exports={registerController}