var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')

async function add_dept() {
  const con = await mysql2.createConnection(connectionDetails);
  try {
    const [result] = await con.execute
      ("insert into departments values(?,?)", ['sp', 'Sports'])
    console.log(result)
  }
  catch (ex) {
    console.log(ex)
  }

  await con.end();
}


add_dept()

