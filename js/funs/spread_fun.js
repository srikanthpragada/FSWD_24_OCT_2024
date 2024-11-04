// Passing parameters using spread operator 

function add(x, y, z) {
    return x + y + z
}

let a = [1, 2, 3, 4]

console.log(add(a))

console.log(add(...a))