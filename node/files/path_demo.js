const path = require('path')

const notes = '/files/test.txt';

console.log(path.dirname(notes));   // folder
console.log(path.basename(notes));  // filename
console.log(path.extname(notes));  


const path = require('path')
console.log(path.join("/node", "files", "test.txt")) 

const path = require('path')
console.log(path.normalize("/node/files/path/..")) 