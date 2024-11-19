const express = require('express') // use express library

const app = express()
const port = 3000


var session = require('express-session')
// add req.session 
app.use(session(
    {
        name: 'session_id',  // cookie name 
        secret : 'abc',
        resave : false,
        saveUninitialized : false,
        cookie : {maxAge: 24 * 60 * 60 * 1000}
    }
));

app.get('/count',
    (req, res) => {
        req.session.count = (req.session.count ?? 0) + 1
        res.send(`<h1>You viewed this page for ${req.session.count} times</h1>`)
    }
)


app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)