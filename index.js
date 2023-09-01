const express=require("express")
const cors =require("cors")
const app =express()
const {dbconnection} =require("./config/db.js")


 const {registerController
    ,loginController,
    getAllUserController,
    deleteUserController} =require("./controllers/userController.js")


 const {productController} =require("./controllers/productController.js")


 const {
    addressCreateController,
    allAddressController,deleteAddress
} =require("./controllers/addressController.js")




dbconnection()



app.use(cors())
app.use(express.json())


app.post("/login",loginController)
app.post("/register",registerController)
app.get("/allusers",getAllUserController)
app.post("/deleteuser",deleteUserController)


//
app.post("/productCreate",productController)
//
app.post("/saveAddress",addressCreateController)
app.get("/getAllAddress",allAddressController)
app.post("/dataDelete",deleteAddress)




app.listen(4000,()=>{
    console.log("test");
})