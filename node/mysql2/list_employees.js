var mysql2 = require('mysql2/promise');
var {connectionString} = require("./util")

async function list_employees() {
  try {
    const con = await mysql2.createConnection(connectionString);

    const [rows, fields] = await con.query('SELECT * FROM employees');
    // console.log(rows)  // rows is an Array of JS object 
    for (let emp of rows) {
       console.log(emp.fullname)
    }
    con.end();
  }
  catch (error) {
    console.log("Error --> ", error)
  }
}


list_employees()


    
 