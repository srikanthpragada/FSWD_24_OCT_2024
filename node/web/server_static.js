const http = require('http');   // load library
const fs = require("fs")

function sendStaticFile(res, filename, type = "text/html") {
    // __dirname will resolve to the directory the executing script resides in
    fs.readFile(__dirname + filename, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Internal Error')
        }
        res.writeHead(200, { 'Content-Type': type })
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    const path = req.url.toLowerCase()
    switch (path) {
        case '/':
            sendStaticFile(res, '/index.html')
            break
        case '/about':
            sendStaticFile(res, '/about.html')
            break
        case '/image':
            sendStaticFile(res, '/st.jpg', 'image/jpeg')
            break
        default:
            res.writeHead(404, { 'Content-Type': "text/html" })
            res.end("<h3>Resource Not Found </h3>")
    }
});

server.listen(8888, 'localhost', () => {
    console.log('Server running...');
});