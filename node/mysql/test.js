let { con } = require("./util")
 
con.connect( (err) => {
    if (err)
        throw err;
    console.log("Connected!");
    con.end()  // close connection 
  }
);
