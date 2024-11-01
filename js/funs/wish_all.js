function wish(...names) {
    for (let n of names)
          console.log('Hello ' + n)

}

function wish2(msg, ...names) {
    for (let n of names)
        console.log(`${msg} ${n}`)

}


wish('Tom', 'Jack')
wish('Tom', 'Jack', "Scott", "David")
wish2('Hi','Bill', 'Mark')
