let a = [1, 2, 3]

// let n1 = a[0]
// let n2 = a[1]
// let n3 = a[2]
// console.log(n1, n2, n3)

// Destructuring assignment 
let [n1, n2, n3] = a
console.log(n1, n2, n3)


// Copy 1st and 3rd and ignore 2nd
let [x, , z] = [1, 2, 3, 4]
console.log(x, z)

let [v1, ...v2] = [1, 2, 3, 4]
console.log(v1, v2)

// Using default value 
let [d, e, f = 10] = [1, 2]
console.log(d, e, f)


