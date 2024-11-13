var mysql2 = require('mysql2/promise');

async function add_dept() {
  const con = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "feb7"
  });

  try {
    const [result, fields] = await con.execute
      ("insert into departments values(?,?)",
        ['d3', 'Department 3'])
    console.log(result)
  }
  catch (error) {
    console.log("Error -->", error)
  }
  con.end();
}


add_dept()