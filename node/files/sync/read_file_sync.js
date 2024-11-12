
const fs = require("fs")

const data = fs.readFileSync('./files/sync/names.txt', "utf-8");
console.log(data)
