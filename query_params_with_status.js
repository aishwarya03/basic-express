// import express package which is a function to add a parenthesis to initialize it.
const express = require('express');
const Stujson = require('./student.json')
const app = express();
const port = 8000;
app.get('/students', (req, res) => {
  console.log(req.query, "query")
  
   let paramsObject = req.query
    if(!paramsObject.rollNo){
        res.send(Stujson.students)
    }
    else{
        const oneStudent = Stujson.students.filter(element => (paramsObject.rollNo == element.rollNo))
        console.log(oneStudent, "line15")
        if(oneStudent.length == 0){
            console.log(oneStudent, "line17")
            res.status(404).send({message : "Not found"} )
        }
        else{
            res.send(oneStudent)
        }
    }
  
    
});


app.listen(8000, () => {
    console.log(`the connection is alive on  http://localhost:${port}`)
});
