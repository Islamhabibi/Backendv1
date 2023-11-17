var express = require("express")
const { sendreq, resive } = require("../Controllers/Controller")
var router = express.Router()
router.get("/get/:x/:y",sendreq)
router.post("/post",resive)




module.exports = router

