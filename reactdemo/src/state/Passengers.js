import React, { useState } from 'react'

function AddPassenger({ addPassenger }) {
    let [passenger, setPassenger] = useState({ pname: '', page: '' })

    function update(evt) {
        let fname = evt.target.name
        let fvalue = evt.target.value
        setPassenger({ ...passenger, [fname]: fvalue })
    }

    function addNewPassenger(evt) {
        evt.preventDefault()
        addPassenger(passenger)  // call function in parent 
    }
    return (
        <form onSubmit={addNewPassenger}>
            Name <br />
            <input name="pname" type="text" value={passenger.name}
                onChange={update} required />
            <p></p>
            Age <br />
            <input name="page" type="number" value={passenger.age}
                onChange={update} required />
            <p></p>
            <button>Add</button> &nbsp;
            <button type='reset'>Clear</button>
        </form>
    )
}

function ListPassengers({ passengers, deletePassenger }) {

    function deletePassengerByIndex(idxToDelete) {
        deletePassenger(idxToDelete)
    }

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    passengers.map((passenger, idx) =>
                        <tr key={idx}>
                            <td> {passenger.pname}</td>
                            <td> {passenger.page}</td>
                            <td className="text-center">
                                <button onClick={() => deletePassengerByIndex(idx)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default function Passengers() {
    let [passengers, setPassengers] = useState([])

    function addPassenger(passenger) {
        setPassengers([...passengers, passenger])
        console.log(passengers)
    }

    function deletePassenger(idxToDelete) {
        setPassengers(passengers.filter((v, idx) => idx != idxToDelete))
    }

    function clearAll() {
        setPassengers([])
    }
    return (
        <div>
            <h2>Passengers</h2>
            <AddPassenger addPassenger={addPassenger} />
            <p></p>
            {passengers.length > 0 &&
                <div>
                    <ListPassengers passengers={passengers} deletePassenger={deletePassenger} />
                    <p></p>
                    <button onClick={clearAll}>Clear All</button>
                </div>
            }

        </div>
    )
}
