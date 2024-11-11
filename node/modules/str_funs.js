
function count_upper(st) {
    let count = 0;
    for (let c of st)
        if (c >= 'A' && c <= 'Z')
            count++;

    return count;
}

function find_pos(st, ch) {
    for (let idx in st)
        if (st[idx] === ch)
            return idx 
    return -1;
}

//console.log(count_upper("HeLLo"), find_pos("Hello", 'a'))

module.exports = {count_upper, find_pos}

