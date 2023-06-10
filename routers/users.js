const express=require("express");
const User=require("../src/models/student")
const router =express.Router();

router.post('/register',(req,res)=>{
    const user=new User({
        name:req.body.name,
        gender:req.body.gender,
    })
    user.save().then(()=>{
        res.status(200).send({
            msg:"Successfully posted"
        })
    })
}
)

module.exports=router;