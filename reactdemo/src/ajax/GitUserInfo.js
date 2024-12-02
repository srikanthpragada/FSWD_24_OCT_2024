import React, { useState } from 'react'
import $ from 'jquery'

export default function GitUserInfo() {
    const [userId, setUserId] = useState("srikanthpragada")
    const [data, setData] = useState({})
    const [message, setMessage] = useState('')

    function getInfo() {
        setMessage('')
        setData({})
        //setTimeout(getUserInfo, 5000)
        getUserInfo()
    }

    function getUserInfo() {
        $.get(
            {
                url: `https://api.github.com/users/${userId}`,
                success: function (resp) {
                    setData(resp)
                },
                error: function (error) {
                    setMessage("Sorry! Invalid userid")
                    //console.log(error.responseJSON.message)
                }
            }
        );

    }

    function updateUserId(e) {
        setUserId(e.target.value)
    }

    return (
        <>
            <h1>Github User Info</h1>
            <input type="text" value={userId} onChange={updateUserId} />
            &nbsp;
            <span className="text-danger ">{message}</span>
            <p></p>
            <button disabled={userId.length === 0} onClick={getInfo}>Get Info</button>

            <p></p>
            {
                data.name &&
                <div className="row">
                    <div className="col-sm-6">
                        {data.name}
                        <p></p>
                        {data.location}
                        <p></p>
                        {data.company}
                    </div>
                    <div className="col-sm-6">
                        <img style={{ width: '300px', height: '300px' }}
                            src={data.avatar_url} alt={data.name}
                            title={data.name}
                            className="image image-responsive" />
                    </div>
                </div>
            }

        </>
    )
}
