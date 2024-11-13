var {con} = require('./util');


con.connect(function (err) {
  if (err) throw err;
  
  var query = con.query(
    "select fullname, salary from employees where salary > ?",
    [400000],
    function (err, employees) {
      if (err) throw err;
      for (let e of employees) {
         console.log('%s %d', e.fullname, e.salary)
      }
      con.end()
    }
  );
}
);
 