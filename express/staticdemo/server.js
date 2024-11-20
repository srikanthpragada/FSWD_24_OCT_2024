const express = require('express') // use express library

const app = express()
// prefix for static files and folder for static files 
app.use('/static', express.static('public' ))  // Middleware 
const port = 3000

app.get('/',
    (req, res) => {
        res.send('<h1>Static Files Demo!</h1>')
    }
)

 
app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)