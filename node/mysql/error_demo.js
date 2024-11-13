var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "demo",
  password: "demo",
  database: "hrdb"
});


con.connect(function (err) {
  if (err) {
    console.log(err)
    throw err;
  } 
  
  con.query("select * from department",
    function (err, departments, fields) {
      if (err) {
        console.log(err)
        throw err;
      }
     
      con.end()
    }
  );
}
);
 