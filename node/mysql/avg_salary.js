var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "demo",
  password: "demo",
  database: "hrdb"
});

con.connect()
 
con.query("select avg(salary) as total_salary from employees",
    function (err, result) {
      if (err) throw err;
      console.log(result)
      console.log(result[0].total_salary)
    }
);

con.end()