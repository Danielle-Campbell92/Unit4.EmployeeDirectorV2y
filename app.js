import express from "express";
import employeeRouter from "#api/data"
// import employees from "#db/employees";

const app = express();

app.use(express.json())

app.use((req,res, next) => {
  console.log(req.method, req.originalUrl)
  next()
})

app.route("/").get((req, res) => {
  console.log("Dani")
  res.send("Hello employees!");
  
});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.

app.use("/employees", employeeRouter)

app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).send("An Error Occurred" + error)
})
export default app