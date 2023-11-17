exports.sendreq=(req,res)=>{
    var x= +req.params.x
    var y = +req.params.y
    res.send({result: x+y})
}
exports.resive= (req,res)=>{
    var {x,y}= req.body
    res.send([x*y])
}