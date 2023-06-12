const express=require("express");
const mongoose=require("mongoose");
const User=require("../src/models/student");
const Student = require("../src/models/student");
const router =express.Router();
const bcrypt=require("bcrypt");

router.post('/register',(req,res)=>{
  bcrypt.hash(req.body.password,10,(err,done)=>{
    if(!err)
    {
        const user=new User({
            name:req.body.name,
            gender:req.body.gender,
            email:req.body.email,
            password:done
        })
        user.save().then((result)=>{
            res.status(200).send({
                msg:"Successfully posted",
                data:result,
            })
        })
    }
  })
    
}
)

router.get("/register",(req,res)=>{
    Student.find().then((result)=>{
        res.status(201).send(result);
    })
    
})

router.get('/register/:id',(req,res)=>{
    Student.find({
        _id:req.params.id,
    }).then((result)=>{
        res.status(200).json({
            data:result
        })
    })
})

router.delete("/register/:id",(req,res)=>{
    Student.findByIdAndDelete(req.params.id,
    ).then(()=>{
         res.status(200).send({
            msg:"Data deleted",
         })
    }).catch((err)=>{
        res.status(500).send({
            msg:err
     })
    })
})


router.put("/register/:api",(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{
        $set:req.body
    }).then((result)=>{
        res.status(200).send({
            data:result
        })
    })
}
)

router.post("/login",(req,res)=>{
   const user= Student.findOne({email:req.body.email})
//    console.log(user);
    // if(user.length<1)
    // {
    //     console.log("not exists")
    //     return res.status(401).send({
    //         msg:"User already exists."
    //     })
    // }
    bcrypt.compare(req.body.password,user.password)
    .then((result)=>{
        res.status(200).send({
            msg:"Login succcess"
        })
    })
    .catch((err)=>{
        res.status(400).send({
            msg:err
        })
    })
})

module.exports=router;