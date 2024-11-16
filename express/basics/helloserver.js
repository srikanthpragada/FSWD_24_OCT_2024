const express = require('express') // use express library
const app = express()
const port = 3000

app.get('/hello',
    (req, res) => {
         var user = req.query.user ?? 'Guest'
         var color = req.query.color ?? 'green'
         res.send(`<h1 style="color:${color}">Hello ${user}</h1>`)
    }
)

app.get('/now',
    (req, res) => {
         var now = new Date() 
         res.send(`<h1 style="color:red">${now}</h1>`)
    }
)

app.listen(port, () => {
       console.log(`Server listening on port ${port}`)
})