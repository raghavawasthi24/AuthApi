const express=require("express");
const mongoose=require("mongoose");
const User=require("../src/models/student");
const Student = require("../src/models/student");
const router =express.Router();

router.post('/register',(req,res)=>{
    const user=new User({
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
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

router.get('/register/:id',(req,res)=>{
    Student.find({
        _id:req.params.id,
    }).then((result)=>{
        res.status(200).json({
            data:result
        })
    })
})

// router.delete("/register/:id",(req,res)=>{
//     Student.find({
//         _id:req.params.id,
//     }).then(()=>{
//          res.status(200).send({
//             msg:"Data deleted",
//          })
//     }).catch((err)=>{
//         res.status(500).send({
//             msg:err
//      })
//     })
// })


router.put("/register/:api",(req,res)=>{
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            gender:req.body.gender,
            email:req.body.email,
        }
    }).then((result)=>{
        res.status(200).send({
            data:result
        })
    })
}
)

module.exports=router;