import React from 'react'

export default function CourseList(props) {
    return (
        <div>
            <h1>Courses</h1>
            Count : {props.courses.length}
            <p></p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Fee</th>
                        <th>Discount %</th>
                        <th>Discount</th>
                        <th>Net Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.courses.map((c, idx) =>
                            <tr key={idx}>
                                <td>{c.title}</td>
                                <td className="text-end">{c.fee}</td>
                                <td className="text-end">{c.disrate}</td>
                                <td className="text-end">{c.fee * c.disrate / 100}</td>
                                <td className="text-end">{c.fee - (c.fee * c.disrate / 100)}</td>

                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}
