// import express package which is a function to add a parenthesis to initialize it.
const express = require('express');
const Stujson = require('./student.json')
const app = express();
const port = 8000;
app.get('/students', (req, res) => {

    console.log(req.query, "query")


    let paramsObject = req.query
    // console.log(paramsObject)
    const oneStudent = Stujson.students.filter(element => (paramsObject.rollNo == element.rollNo))
    // console.log(oneStudent[0])
    //res.send(oneStudent.length == 0 ? Stujson.students : oneStudent[0])
  res.send ({success: true, message: "Student retrieved successfully", data : {student : oneStudent.length == 0 ? Stujson.students : oneStudent[0] }}) 
});
// if(oneStudent.length == 0){
//     res.send(Stujson.students)
// }
// else{
//     res.send(oneStudent)
// }


//    Stujson.students.forEach(element => {
//     if(paramsObject.rollNo == element.rollNo){

//         res.send(element)
//         }
//    });




app.listen(8000, () => {
    console.log(`the connection is alive on  http://localhost:${port}`)
});

// function studentDetails(){
//     console.log(Stujson.students)
// }

// studentDetails();