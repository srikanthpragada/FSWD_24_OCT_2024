
function print() {
    console.log("Hello!")
}

function wish(name){
    console.log("Hi " + name)
}

function doSomething(func) {
    func()
}

doSomething(print)
doSomething(wish)