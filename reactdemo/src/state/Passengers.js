import React, {useState} from 'react'

function AddPassenger() {
    let [passenger, setPassenger] = useState({ name: '', age : ''})

    function update(evt) {
        let fname = evt.target.name 
        let fvalue = evt.target.value 
        setPassenger( { ...passenger, [fname] : fvalue })
    }
    return (
        <form>
            Name <br/>
            <input name="name" type="text" value={passenger.name} 
                   onChange={update}  required />
            <p></p>
            Age <br/>
            <input name="age" type="number"  value={passenger.age} 
                   onChange={update} required />
            <p></p>
            <button>Add</button>
        </form>
    )
}


export default function Passengers() {
  let [passengers, setPassengers] = useState([])

  return (
     <div>
        <h2>Passengers</h2>
        <AddPassenger />

     </div>
  )
}
