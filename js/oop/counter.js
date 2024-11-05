class Counter {
     constructor(value) {
        this.start = value 
        this.value = value 
     }

     increment() {
        this.value ++
     }

     decrement() {
        this.value --
     }

     getValue() {
         return this.value
     }

     reset() {
        this.value = this.start 
     }
}

let c1 = new Counter(100)
c1.increment()
console.log(c1.getValue())  // 101 
console.log(c1.value)
c1.reset() 
console.log(c1.getValue())  // 100 

