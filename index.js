const express=require("express")
const cors =require("cors")
const app =express()
const fileUpload=require("express-fileupload")
const {dbconnection} =require("./config/db.js")


 const {registerController
    ,loginController,
    getAllUserController,
    deleteUserController} =require("./controllers/userController.js")


 const {productCreateController,
getSingleProduct} =require("./controllers/productController.js")
//address controller

 const {
    addressCreateController,
    allAddressController,deleteAddress
} =require("./controllers/addressController.js")

//category controller

const{
    categoryCreateController,
    
}=require("./controllers/categoryController.js")


dbconnection()



app.use(cors())
app.use(fileUpload())
app.use(express.json())


app.post("/login",loginController)
app.post("/register",registerController)
app.get("/allusers",getAllUserController)
app.post("/deleteuser",deleteUserController)


//
app.post("/productCreate",productCreateController)
app.post("/getSingleProduct",getSingleProduct)
//
app.post("/saveAddress",addressCreateController)
app.get("/getAllAddress",allAddressController)
app.post("/dataDelete",deleteAddress)


//category route
app.post("/saveCategory",categoryCreateController)



app.listen(4000,()=>{
    console.log("test");
})