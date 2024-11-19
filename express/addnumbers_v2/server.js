const express = require('express') // use express library
const path = require("path")
const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Handle GET request 
app.get('/add',
    (req, res) => {
           res.render('add',
                 {total : '',
                  first : '',
                  second : ''
                })
        }
)

// Handle POST request 
app.post('/add',
    (req, res) => {
           // process the data 
           total = parseInt(req.body.first) + parseInt(req.body.second)
           res.render('add',
                 {total : total,
                  first : req.body.first,
                  second : req.body.second
                })
        }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)