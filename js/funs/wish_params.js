function wish(name, message) {
    if(!message) // if undefined 
        message = "Hi"
    console.log(`${message} ${name}`)
}

wish('Steve', 'Hello')
wish('Jack')


