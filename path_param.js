// import express package which is a function to add a parenthesis to initialize it.
const express = require ('express');
const app = express();
const port = 8000;
app.use(express.json())
// if you want to create a uri for the t-shirt 
// that will automatically set our server with that endpooint,
// then it is our job to handle a request to it by passing a callback function as a second argument
//  "/tshirt" => route
// (req,response)=>{} handler run this function when the route is requested
app.get('/students', (req,res)=>{
    res.status(200).send(1,2,3)
})
// o/p for send is 1 since it is returning 
// id captures the dynamic values in the URL they are route params
// trying to create a new data on the server
app.post("/students/:rollNo",(req,res) =>{
    const {rollNo}  = req.params;
    const {name} = req.body;
    if(!rollNo){
        res.status(418).send({message : "we need human students for  the school!!"})
    }
    res.send({
        rollNo : `this is the student of ${rollNo} with this ${name}`
    })
})
// fire up the api
app.listen(8000, ()=>{
    console.log(`the connection is alive on  http://localhost:${port}`)
});