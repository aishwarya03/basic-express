let employees = [
    {
        "id": 1000090,
        "name": "Rey",
        "designation" : "manager",
        "location" : "sholinganallur",
        "hobbies" : "dancing",
        "phoneNumber" :"+912345678",
    },
    // {
    //     "id": 1000091,
    //     "name": "plontinss",
    //     "designation" : "manager",
    //     "location" : "sholinganallur",
    //     "hobbies" : "dancing",
    //     "phoneNumber" :"+912345678",
    // }
]

const express = require("express")
const app = express();
const port = 6080;
app.use(express.json());
app.delete("/employee/:id", function (req, res) {
    const index = employees.findIndex(element => element.id == req.params.id)
    console.log(index);
    employees.splice(index, 1);
    res.status(200).send({ message: "successfully delted", data: employees })

})

app.post("/employee", function (req, res) {

    if (employees.length > 0) {
        req.body.id = employees[employees.length - 1].id + 1

    }
    else {
        req.body.id = 1000090;

    }
    employees.push(req.body)
    res.status(200).send({ message: "successfuly added", success: true, data: employees })


})

app.put("/employee/:id", function (req, res) {
    const id = req.params.id;
    console.log(id)
    const foundEmp = employees.find(element => element.id == id)
    if (!foundEmp) {
        return res.status(400).send({ message: "check id", success: false, data: employees})
    }
    // console.log(foundEmp.name, req.body, "linenoe55")
    foundEmp.name = req.body.name;
    res.status(200).send({ message: "updates", success: true, data: employees })
    // console.log(employees, "lineno58")

})
app.listen(port, function () {
    console.log(`alive and running at port ${port}`)
})