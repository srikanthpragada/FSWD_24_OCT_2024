const fs = require("fs")

try {
    let data = fs.readFileSync("files/sync/name.txt", "utf-8")
    console.log(data)
}
catch(err) {
    console.log("Error ->" + err.message)
}

console.log(new Date())
