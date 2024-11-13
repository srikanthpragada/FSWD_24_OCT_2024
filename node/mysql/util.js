var mysql = require('mysql');

var con = mysql.createConnection(
{
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "oct24"
}
);

exports.con = con 