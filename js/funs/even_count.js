function count_even(...nums) {
    let count = 0
    for (let n of nums) {
        if (n % 2 == 0)
            count++
    }

    return count
}

let cnt = count_even(10, 11, 34, 45, 56)
console.log(cnt)
