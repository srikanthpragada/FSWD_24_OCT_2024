var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')

async function update_salary() {
  const con = await mysql2.createConnection(connectionDetails);
  try {
    const [result, fields] = await con.execute
      ("update employees set salary = ? where emp_id = ?", [200000, 5])
    //console.log(result)
    if (result.affectedRows === 1)
      console.log("Updated!")
    else
      console.log("Sorry! Employee not found!")
  }
  catch (ex) {
    console.log("Error while updating salary : " + ex.message)
  }
  await con.end();
}


update_salary() 
