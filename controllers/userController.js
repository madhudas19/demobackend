
const { User } = require("../models/user.js")

const bcrypt = require('bcryptjs');

const registerController = async (req, res) => {
  const { name, email, password } = req.body
  //  if (!name || !phone || !age) {
  //   return   res.status(400).json({error:" please field all value"})

  //     }

  try {

    const findEmail = await User.findOne({ email })
    if (findEmail) {
      return res.status(400).json({ error: "Email already register" })
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    const saveUser = await User.create({ email, password: hash })
    if (saveUser) {
      return res.status(200).json({ message: " data save successfully" })
    }
  } catch (error) {
    console.log(error);
  }
}

const loginController = async (req, res) => {
  const {password,email} =req.body
  // const email = req.body.email
  console.log(email,password);

  const findemail=await User.findOne({email})
  console.log(findemail);
  if (!findemail) {
    return res.status(200).json({ error: "invalid credential" })
  }


  return res.status(200).json({ message: "logged in" })
}

const getAllUserController = async (req, res) => {
  // console.log(req);
  try {
    const allData = await User.find().select("-password")


    return res.status(200).json(allData)
  } catch (error) {
    console.log(error);
  }
}
const deleteUserController = async (req, res) => {
  console.log(req.body.id);
  try {
    const allData = await User.findByIdAndDelete(req.body.id)


    return res.status(200).json(allData)
  } catch (error) {
    console.log(error);
  }
}






module.exports = {
  registerController,
  loginController,
  getAllUserController,
  deleteUserController
}