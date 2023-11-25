var express = require("express")
const { RegisterUser, getUser, LoginUser, UpdateUser, DeleteUser } = require("../Controllers/userController")
 
var userRouter = express.Router()

userRouter.get("/get",getUser)
userRouter.post("/post/",RegisterUser)
userRouter.post("/login",LoginUser)
userRouter.put("/update/:id",UpdateUser)
userRouter.delete("/delete/:id",DeleteUser)

module.exports = userRouter