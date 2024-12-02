import React, { useState } from 'react'

export default function FetchDemo() {
    const [now, setNow] = useState('')

    function getIndiaTime() {
        // AJAX call
        fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia/Calcutta")
            .then(response => response.json())
            .then(data => setNow(data.dateTime))
    }


    return (
        <>
            <h1>Fetch Demo</h1>
            <h2>{now}</h2>
            <button onClick={getIndiaTime}>India Time</button>

        </>
    )
}
