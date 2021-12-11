const express = require ("express");
const multer = require("multer")
const port = process.env.PORT || 3000
const uploads = multer();
const app = express();


//app.use(uploads.none())

app.post("/",uploads.none(), (req,res)=>{
    const data = req.body
    console.log(data)
    res.status(200).send({message : "here",data});
})

app.listen(3000, ()=>{
    console.log("running.....")
})