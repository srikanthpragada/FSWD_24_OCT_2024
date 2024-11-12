const fs = require("fs").promises

async function copy() {
    try {
        console.log("About to read!")
        let data = await fs.readFile(__dirname + "/names3.txt", "utf-8")
        console.log("About to write!")
        await fs.writeFile(__dirname + "/names2.txt", data)
        console.log("Copied!")
    }
    catch (error) {
        console.log(error)
    }
}

copy()   // Async operation 

// Normal operation 
for(let i = 1; i <= 100; i ++)
   console.log(i)
