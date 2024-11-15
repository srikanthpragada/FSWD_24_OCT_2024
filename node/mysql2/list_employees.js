var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')

async function list_employees() {
  try {
    const con = await mysql2.createConnection(connectionDetails);
    const [rows, fields] = await con.execute
       ('SELECT * FROM employees where salary is not null');
    for (let row of rows)
      console.log(`${row.fullname.padEnd(20)} - ${row.salary}`)
    await con.end();
  }
  catch (ex) {
    console.log(ex)
  }
}


list_employees()


    
 