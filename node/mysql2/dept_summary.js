var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')

async function list_employees() {
  try {
    const con = await mysql2.createConnection(connectionDetails);
    const [rows, fields] = await con.execute
       ('SELECT dept_id, sum(salary) as total from employees group by dept_id');

    //console.log(rows)
    for (let row of rows)
      console.log(`${row.dept_id} - ${row.total}`)
    await con.end();
  }
  catch (ex) {
    console.log(ex)
  }
}


list_employees()


    
 