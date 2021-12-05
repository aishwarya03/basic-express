
const stu = require("./object")
const express = require("express")

const app = express();
const port = 7000;
app.use(express.json())

app.post("/students", function (req, res) {

    console.log(req.body)
    const newStudent = req.body;
    
        if(newStudent.name && newStudent.dateOfBirth){

        stu.students.push(newStudent)
        console.log(stu.students);
        res.send("huh")
    }
})

app.get("/students",function (req,res){
    res.send(stu.students)
})


app.listen(7000, () => {
    console.log(`This is alive and running in the port ${port}`)
})