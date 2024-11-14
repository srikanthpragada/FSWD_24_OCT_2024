var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')


async function list() {
  try {
    const con = await mysql2.createConnection(connectionDetails);
    const [depts] = await con.execute('SELECT * FROM departments');
    console.log(depts)
    await con.end();
  }
  catch (ex) {
    console.log(ex)
  }
}


list()


    
 