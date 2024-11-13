var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "demo",
  password: "demo",
  database: "hrdb"
});

con.connect(function (err) {
  if (err) throw err;
 
  con.query("insert into departments values(?,?)",
    ['d1', 'Department1'],
    function (err, result) {
      if (err) throw err;
      console.log("Inserted %d rows", result.affectedRows)
      con.end()
    }
  );
}
);
 