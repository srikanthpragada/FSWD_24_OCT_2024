var {con} = require("./util")

con.connect(function (err) {
  if (err) throw err;
 
  con.query(
    "insert into departments values(?,?)", // SQL command
    ['d1', 'Department1'],                 // Parameters 
    function (err, result)                 // Callback 
    {
      if (err) throw err;
      console.log(result)
      console.log("Inserted %d rows", result.affectedRows)
      con.end()
    }
  );
}
);
 