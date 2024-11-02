
let d1 = new Date(2024, 0, 1, 0, 0)
console.log(d1)
let d2 = new Date()
console.log(d2)

let m1 = d1.getTime() 
let m2 = d2.getTime() 

let days = (m2 - m1) / (24 * 60 * 60 * 1000)
console.log(days)


