const express=require("express");
const router = require("./Router/Router");
const port = 5667
const app= express() 
app.use(express.json())
app.listen(port,console.log(`server is runing at http://192.168.3.63:${port}`))
app.use("/",router)

