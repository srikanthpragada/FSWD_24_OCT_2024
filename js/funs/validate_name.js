
function isName(str) {
    return /^[a-zA-Z ]+$/.test(str)
}


console.log(isName('Garry Ken'))
console.log(isName('Joe 12'))

