const express = require('express') // use express library
const path = require("path")

const app = express()
const port = 3000

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/now',
    (req, res) => {
         res.render('now',  // view name (now.ejs)
            { now : new Date(),
              user : req.query.user ??  'Guest'
            }  // data is JS object
          )
    }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)