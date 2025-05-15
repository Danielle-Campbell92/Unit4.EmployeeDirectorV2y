import express from "express"
import employees from "#db/employees";
const router = express.Router()



router.route("/")
.get((req, res) => {
    // const employees = getEmployees()
    res.send(employees)
})
.post((req, res) => {
    if(!req.body){
        return res.status(400).send("Request is not found. Please send over an employee")
    }

const { employee } = req.body

if(!employee){
    return res.status(400).send("Please send a valid employee")
}

employees.push(employee)
res.status(201).send(`Added the employee ${employee}`)
})

router.route("/random").get((req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length);
    res.send(employees[randomIndex]);
  });
  
router.route("/:id").get((req, res) => {
    const { id } = req.params;
  
    // req.params are always strings, so we need to convert `id` into a number
    // before we can use it to find the employee
    const employee = employees.find((e) => e.id === +id);
  
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
  
    res.send(employee);
  });

export default router