const fs = require("fs")

console.log("About to read...")
fs.readFile(__dirname + "/names.txt", "utf-8",
    (err, data) => {
        if (err)
            console.log("Error " + err.message)
        else {
            console.log("Read and about to write...")
            // write to names2.txt
            fs.writeFile(__dirname + "/names2.txt", data,
                     () => console.log("Copied!"))
        }
    })

console.log(new Date())


