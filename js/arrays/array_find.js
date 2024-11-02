let a = [1, 3, 4, 8, 10, 32]

// Arrow function
let v = a.find(v => v % 5 === 0)
console.log(v)

// Function expression 
v = a.find(function(v){ return v % 5 == 0})

console.log(v)