const fs = require("fs").promises

let p = fs.readFile(__dirname + "/names.txt", "utf-8")

p.then(
    data => {
    console.log("Read file!")
    let np = fs.writeFile(__dirname + "/names2.txt", data)
    np.then(() => console.log("Copied!!!"))
    np.catch( (err) => console.log("Error while writing!"))
   }
,
(error) => console.log("Error while reading!"))





