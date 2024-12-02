import React, { useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')

    function getDateTime() {
        $.ajax(
          'https://timeapi.io/api/time/current/zone?timeZone=Asia/Calcutta',
           {
             success:(data) =>  setNow(data.dateTime),
             error: 
                () =>{ 
                    setNow(''); // clear output 
                    alert("Sorry! Couldn't get date and time")
                }
           }
        )
    }



    return (
        <>
            <h2>AJAX with jQuery</h2>
            <h1>{now}</h1>
             <p></p>
            <button onClick={getDateTime}>Get DateTime</button>


        </>
    )
}
