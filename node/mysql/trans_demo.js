var { con } = require("./util")

con.connect(function (err) {
  if (err) throw err;

  // begin transaction
  con.beginTransaction(error => {
    if (error)
      throw error;

    // make changes 
    try {

      // changes 
      con.commit(error => {
        if (error)
          throw error;

        console.log("Done!")
      })

    } // try
    catch (error) {
      con.rollback(error => {
        if (error) {
          console.log("Error while rolling back! --> " + error)
          throw error
        }
      }
      ) // rollback
    }// catch 
  } // beginTransaction 
  )
}
);