const express = require('express') // use express library
const app = express()
const port = 3000

app.get('/greet',
    (req, res) => {
         res.send(`<h1>Hello Guest!</h1>`)
    }
)

// Using route parameter
app.get('/greet/:user',
    (req, res) => {
         var user = req.params.user 
         res.send(`<h1>Hello ${user}</h1>`)
    }
)

app.listen(port, () => {
       console.log(`Server listening on port ${port}`)
})