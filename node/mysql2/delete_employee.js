var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')

async function delete_employee() {
  const con = await mysql2.createConnection(connectionDetails);
  try {
    const [result, fields] = await con.execute
      ("delete from employees where emp_id = ?", [11])
    //console.log(result)
    if (result.affectedRows === 1)
      console.log("Deleted!")
    else
      console.log("Sorry! Employee not found!")
  }
  catch (ex) {
    console.log("Error while deleting employee : " + ex.message)
  }
  await con.end();
}


delete_employee()
