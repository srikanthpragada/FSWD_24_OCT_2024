const express = require('express') // use express library
const path = require("path")
const app = express()
const port = 3000

let coursesList = [
    { title : 'Java SE', fee : 10000},
    { title : 'Python', fee : 12000},
    { title : 'AWS', fee : 5000}
]

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/courses',
    (req, res) => {
         res.render('courses', 
               { courses : coursesList,         // arrary
                 trainer : 'Srikanth Pragada'   // string 
               } 
            )
    }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)