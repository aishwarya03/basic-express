// import express package which is a function to add a parenthesis to initialize it.
const express = require('express');

const Stujson = require('./student.json')
const app = express();
const port = 8000;
app.get('/students/:rollNo', (req, res, next) => {

    console.log(req.query, "query")
       let paramsObject = req.params;

    Stujson.students.forEach(element => {
        if (paramsObject.rollNo == element.rollNo) {

             res.send(element)
             }
              });

});


app.listen(8000, () => {
    console.log(`the connection is alive on  http://localhost:${port}`)
});

// function studentDetails(){
//     console.log(Stujson.students)
// }

// studentDetails();