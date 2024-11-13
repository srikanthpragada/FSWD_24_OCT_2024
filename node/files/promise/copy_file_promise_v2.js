const fs = require("fs").promises

let p = fs.readFile(__dirname + "/names.txt", "utf-8")

p.then(data => fs.writeFile(__dirname + "/abc/names2.txt", data))
 .then( () => console.log("Copied"))
 .catch( error => console.log(error.message))





