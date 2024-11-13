var {con} = require("./util")

con.connect(function (err) {
  if (err) throw err;
  
  con.query("select * from departments",
    //  error, rows, fields 
    function (err, departments, fields) {
      if (err) throw err;
      // console.log(departments)
      // console.log(fields)
      for (let dept of departments) {
         console.log('%s %s', dept.dept_id.toUpperCase(), dept.dept_name)
      }
      con.end()
    }
  );
}
);
 