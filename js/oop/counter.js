class Counter {

}

let c1 = new Counter(100)
c1.increment()
console.log(c1.getValue())  // 101 
c1.reset() 
console.log(c1.getValue())  // 100 

