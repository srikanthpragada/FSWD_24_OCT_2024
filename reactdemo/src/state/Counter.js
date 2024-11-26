import React, { useState } from 'react'

export default function Counter() {
  let [counter, setCounter] = useState(0) 

  function increment() {
    setCounter(counter + 1)
    console.log(counter)
  }
  function decrement() {
    setCounter(counter - 1)
  }
  return (
     <div>
        <h2>Counter</h2>
        <h1>{counter}</h1>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
     </div>
  )
}
