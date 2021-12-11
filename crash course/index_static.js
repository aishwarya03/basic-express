const express = require("express");
const path = require("path");

const app = express();

const port = 5050;

// Set a static folder in this case "public" and put as many has files in there 
// use is a method when we want to use a midleware
app.use(express.static(path.join(__dirname, "public")))

app.listen(port , ()=>{
    console.log(`the server is alive at the port ${port}`)
})