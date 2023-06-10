const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://raghavawasthi240:Raghav24@cluster0.eq1tcx0.mongodb.net/",{useNewUrlParser:true}
).then(()=>{
    console.log("success");
}).catch((err)=>{
    console.log(err.message);
})