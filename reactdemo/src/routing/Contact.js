import React from 'react'
import { useParams } from "react-router-dom";


export default function Contact() {
    let { info } = useParams();
         
    return (
        <>
            <h1>Contact Details</h1>
            <h3>{info === 'phone' ? '9059057000' : 'contact@srikanthtechnologies.com'}</h3>
        </>
    )
}
