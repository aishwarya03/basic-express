const express = require('express')
const app = express();
app.use(express.json())

app.listen(9000, () => {
    console.log("running . . . .")
})

app.get('/', function(req,res){
    res.send("hello World");
})

app.post('/', function(req,res){
    let name = req.body.name + " hello"
    res.send(name)
})