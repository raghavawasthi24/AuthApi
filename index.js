const express=require('express');
const bodyparser=require('body-parser');
const userRouter=require("./routers/users.js");
require("./src/db/conn.js");

const app=express();
const PORT=5000;

app.use(bodyparser.json());

app.use('/users',userRouter);



 


app.get('/',(req,res)=>{
    res.send("Welcome to Homepage");
})

app.listen(PORT,()=>{console.log("Server is running")});