import React from 'react'

export default function Course(props) {
    return (
        <div>
            <h2>Course Details</h2>
            <table className="table table-bordered">
                <tr>
                    <th>Title</th>
                    <td>{props.title}</td>
                </tr>
                <tr>
                    <th>Course Fee</th>
                    <td>{props.fee}</td>
                </tr>
            </table>
        </div>
    )
}
