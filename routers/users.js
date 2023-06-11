const express=require("express");
const mongoose=require("mongoose");
const User=require("../src/models/student");
const Student = require("../src/models/student");
const router =express.Router();

router.post('/register',(req,res)=>{
    const user=new User({
        name:req.body.name,
        gender:req.body.gender,
    })
    user.save().then((result)=>{
        res.status(200).send({
            msg:"Successfully posted",
            id:result.id,
        })
    })
}
)

router.get("/register",(req,res)=>{
    Student.find().then((result)=>{
        res.status(201).send(result);
    })
    
})

module.exports=router;