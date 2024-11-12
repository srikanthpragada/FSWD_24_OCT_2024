const fs = require('fs')

fs.writeFile("./files/test.txt", 
    "This is first line\nThis is second line!",
    (error, data) => {
    if (error)
        throw error;
    console.log("Wrote Successfully")
})