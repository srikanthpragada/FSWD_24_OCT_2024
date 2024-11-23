import React from 'react'

export default function Wish() {
    function wish() {
        let hours = new Date().getHours()
        let msg = "Good Evening"
        if (hours < 12)
            msg = "Good Morning"
        else
            if (hours < 17)
                msg = "Good Afternoon"

        alert(msg)
    }
    return (
        <div>
            <h2>Wishing</h2>
            <button onClick={wish}>Wish</button>
        </div>

    )
}
