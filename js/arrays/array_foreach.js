let a = [10, 20, 30]

for (let v of a)
    console.log(v)

function print(v) {
    console.log(v * v)
}

a.forEach(print)  // callback function is print 

// Using arrow function 
a.forEach(v => console.log(v + v))

