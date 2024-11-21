const express = require('express') // use express library
const path = require("path")
const mysql2 = require("mysql2/promise")
const { conDetails } = require("./util")

const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());  // Enable support for JSON

app.get('/employees',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      const [rows, fields] = await con.query
        ('SELECT * FROM employees');
      res.json(rows)  // convert array of JS objects to array of JSON objects
    }
    catch (error) {
      console.log("Error --> ", error)
      // internal error 
      res.status(500).send(error.sqlMessage)
    }
    finally {
      if (con)
        await con.end()
    }
  }
)

app.get('/employees/:id',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      const [rows, fields] = await con.query
        ('SELECT * FROM employees where emp_id = ?',  [req.params.id]);
      if (rows.length > 0) // Found employee
        res.json(rows[0])
      else  // id not found 
        res.status(404).send("Employee Id Not Found!")
    }
    catch (error) {
      console.log("Error --> ", error)
      res.status(500).send(error.sqlMessage)
    }
    finally {
      if (con)
        await con.end()
    }
  }
)

app.get('/search/:empname',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      const [rows, fields] = await con.query
        ('SELECT * FROM employees where fullname like ?',
          [`%${req.params.empname}%`]
        );
      res.json(rows)
    }
    catch (error) {
      console.log("Error --> ", error)
      res.status(500).send(error.sqlMessage)
    }
    finally {
      if (con)
        con.end()
    }
  }
)

app.get('/empbydept/:dept',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      const [rows, fields] = await con.query
        ('SELECT * FROM employees where dept_id = ?',
          [req.params.dept]
        );
      res.json(rows)
    }
    catch (error) {
      console.log("Error --> ", error)
      res.status(500).send(error.sqlMessage)
    }
    finally {
      if (con)
        con.end()
    }
  }
)

app.post('/employees',
  async (req, res) => {
    let con = null
    try {
      // validate data 
      let message = validateEmployee(req.body)
      if (message != null)  // validation failed 
      {
        res.status(400).send(message)  // bad request 
        return 
      }

      con = await mysql2.createConnection(conDetails);
      let result = await con.execute(
        "insert into employees(fullname,dept_id, salary) values (?,?,?)",
        [req.body.empname, req.body.deptid, req.body.salary]
      )
      res.status(201).send('Employee Inserted!')
    }
    catch (error) {
      console.log("Error --> ", error)
      res.status(500).send(error.sqlMessage)
    }
    finally {
      if (con)
        await con.end()
    }
  }
)


app.delete('/employees/:id',
  async (req, res) => {
    let con = null
    try {
      con = await mysql2.createConnection(conDetails);
      let [result, fields] = await con.execute(
        "delete from employees where emp_id = ?",
        [req.params.id]
      )
      console.log(result)
      if (result.affectedRows === 1)
        res.status(204).end()  // No data 
      else
        res.status(404).send("Employee Id Not Found!")
    }
    catch (error) {
      console.log("Error --> ", error)
      res.status(500).send(error.sqlMessage)
    }
    finally {
      if (con)
        await con.end()
    }
  }
)

app.put('/employees/:id',
  async (req, res) => {
    let con = null
    try {
      let message = validateEmployee(req.body)
      if (message != null)
      {
        res.status(400).send(message)
        return 
      }

      con = await mysql2.createConnection(conDetails);
      let [result, dummy] = await con.execute(
        "update employees set fullname = ?, dept_id = ?, salary = ? where emp_id = ?",
        [req.body.empname, req.body.deptid, req.body.salary, req.params.id]
      )

      if (result.affectedRows === 1)
        res.status(200).send('Updated Successfully')
      else
        res.status(404).send("Employee Id Not Found!")
    }
    catch (error) {
      console.log("Error --> ", error)
      res.status(500).send(error.sqlMessage)
    }
    finally {
      if (con)
        await con.end()
    }
  }
)

// Returns null on success, message on failure 
function validateEmployee(employee) {
  console.log(employee)
  // validate data 
  if (!employee.empname) {
    return "Employee name is missing!"
  }

  if (!employee.deptid) {
    return "Department Id is missing!"
  }

  if (!employee.salary) {
    return "Salary is missing!"
  }

  if(employee.salary < 0)
     return "Invalid Salary!"

  return null;
}


app.listen(port,
  () => {
    console.log(`Server listening on port ${port}`)
  }
)