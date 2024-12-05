var express = require('express');
var handlers = require("./restHandlers")
var cors = require('cors')


const port = 8888
var app = express();
app.use(express.json());
app.use(cors()) 

//static files config
app.use(express.static('build'))


app.get('/books', handlers.getBooks) 
app.get("/books/search", handlers.searchBooks)
app.get('/books/author', handlers.getBooksByAuthor)
app.get('/authors', handlers.getAuthorsBooksCount)

app.get('/books/:id', handlers.getBookById)



app.post('/books', handlers.addBook)
app.put('/books/:id', handlers.updateBook)
app.delete('/books/:id', handlers.deleteBook)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

