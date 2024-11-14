var mysql2 = require('mysql2/promise');
var {connectionDetails} = require("./util")

async function test() {
  try {
    const con = await mysql2.createConnection(connectionDetails);
    console.log('Connected!')
    await con.end();
  }
  catch (error) {
    console.log("Error --> ", error.message)
  }
}


test()

