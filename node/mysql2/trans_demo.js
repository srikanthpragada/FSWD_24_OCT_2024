var mysql2 = require('mysql2/promise');
var { connectionDetails } = require("./util")

async function test() {
  var con = await mysql2.createConnection(connectionDetails);
  console.log("Connected!")
  try {
    // begin transaction
    await con.beginTransaction()
    // changes 
    await con.execute("update employees set salary = 500000 where emp_id = 1")
    await con.execute("update emp set salary = 500000 where id = 2")
    await con.commit()
    console.log("Committed!")
  }
  catch (error) {
    await con.rollback()
    console.log("Rolledback!")
  }
  await con.end()

}


test()

