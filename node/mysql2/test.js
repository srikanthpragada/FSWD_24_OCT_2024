var mysql2 = require('mysql2/promise');
var {connectionString} = require("./util")

async function test() {
  try {
    const con = await mysql2.createConnection(connectionString);
    console.log('Connected!')
    con.end();
  }
  catch (error) {
    console.log("Error --> ", error)
  }
}


test()

