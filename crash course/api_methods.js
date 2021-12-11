const express = require ("express")

const app = express();
const port = 6060;
const empp = require("./employees")

// create a simple middleware function 
// next is to move to the next middleware function in the stack
const logger = (req,res,next) =>{
    console.log("hello");
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`)
    next();
}

//inititalize middleware 

app.use(logger)


// this route gets all members
app.get("/api/members", (req,res) =>{

    res.json(empp);

})

app.listen (port, (req,res) => {
    console.log(`alive and running at the port ${port}`)
})