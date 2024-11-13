var {con} = require("./util")


con.connect(function (err) {
  if (err) throw err;
 
  con.query(
    "update departments  set dept_name  = ? where dept_id = ?",
    ['Department One', 'd1'],
    function (err, result) {
      if (err) throw err;
      console.log(result)
      if(result.affectedRows === 0)
         console.log("Sorry! Department id not found!")
      else
         console.log("Updated department")
      con.end()
    }
  );
}
);
 