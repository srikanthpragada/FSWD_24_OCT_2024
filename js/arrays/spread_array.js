let a = [1,2,3]
let b = a                       // create an alias 


let c = [0, ...a, 10]          // spread array and create a copy 

console.log(a)
console.log(b)
console.log(c)

a.push(4)

console.log(a, b, c)