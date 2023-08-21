const express=require("express")
const cors =require("cors")
const app =express()
const {dbconnection} =require("./config/db.js")


 const {registerController} =require("./controllers/userController.js")
 const {productController} =require("./controllers/productController.js")







dbconnection()









app.use(cors())
app.use(express.json())









app.post("/login",registerController)
app.post("/register",productController)
app.post("/productcreate",productController)




app.listen(4010,()=>{
    console.log("test");
})