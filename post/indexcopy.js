
const stu = require("./object")
const express = require("express")

const app = express();
const port = 7000;
app.use(express.json())

app.post("/students", function (req, res) {

    let err = {};
    const newStudent = req.body;
    if (!String(newStudent.name).trim()) {
        err.name = ["name required"]
    }

    if (!(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/).test(newStudent.dateOfBirth)) {
        err.dateOfBirth = ["dob required"]
    }

    if (Object.keys(err).length) {
        return res.status(400).send({ err })
    }
    if (newStudent.name && newStudent.dateOfBirth) {

        stu.students.push(newStudent)
        console.log(stu.students);
        res.send("huh")
    }
})

app.get("/students", function (req, res) {
    res.send(stu.students)
})


app.listen(7000, () => {
    console.log(`This is alive and running in the port ${port}`)
})