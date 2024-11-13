var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "demo",
  password: "demo",
  database: "hrdb"
});

con.connect(function (err) {
  if (err) throw err;
  con.query("select dept_id, sum(salary) as total_salary from employees group by dept_id",
    function (err, departments, fields) {
      if (err) throw err;
      
      for (let dept of departments) {
         console.log('%s %d', dept.dept_id, dept.total_salary)
      }
      con.end()
    }
  );
}
);
