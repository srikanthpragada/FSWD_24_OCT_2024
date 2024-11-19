const express = require('express') // use express library

const app = express()
const port = 3000

// Use cookie-parser middleware
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/create',
    (req, res) => {
        res.cookie("city", 'Vizag', { maxAge : 1000 * 60 * 60 * 24 * 7})
        res.send('<h2>Cookie Created!</h1>')
    }
)

app.get('/show',
    (req, res) => {
        console.log(req.cookies)
        res.send(`<h1>${req.cookies.city ?? 'Not Found'}</h1>`)
    }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)