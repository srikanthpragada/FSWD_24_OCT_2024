const http = require('http');   // import library 

const server = http.createServer(
     (req, res) => {
          res.statusCode = 200;  // OK
          res.setHeader('Content-Type', 'text/html');
          let now = new Date().toString() 
          res.end(`<h1>Hello World From Node Server.</h1><h3> Today is ${now}</h3>`);
     }
);

// port, host , callback 
server.listen(8888, 'localhost',
     () => { console.log('Server running...'); }
);