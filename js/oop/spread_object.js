// Spread Objects 

let p = { name: "Larry", company: 'Google' }
console.log(p)

let p2 = p   // alias 

// create copy using spread operator 
let p3 = { ... p, age : 35, company : "Facebook" }
console.log(p3)

p.name = "Sergy"

console.log(p2)
console.log(p3)

