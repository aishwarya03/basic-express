const express = require("express");
const path = require("path");

const app = express();

const port = 5050;


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "public" , "index.html"))
})

app.listen(port , ()=>{
    console.log(`the server is alive at the port ${port}`)
})