import express from "express"
import { getEmployees, addEmployees } from "#db/employees"
const router = express.Router()

router.route("/")
.get((req, res) => {
    const employees = getEmployees()
    res.send(employees)
})
.post((req, res) => {
    if(!req.body){
        return res.status(400).send("Request Body is not found. Please send over an employee")
    }

const { employee } = req.body

if(!employee || typeof employee !== 'object' || !employee.name){
    return res.status(400).send("Please send a valid employee")
}

addEmployees(employee)
res.status(201).send(`Added the employee ${employee}`)
})

export default router