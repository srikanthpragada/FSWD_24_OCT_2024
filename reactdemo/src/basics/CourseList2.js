import React from 'react'

function Course({course, idx}) {
  return   (
    <tr key={idx}>
    <td>{course.title}</td>
    <td className="text-end">{course.fee}</td>
    <td className="text-end">{course.disrate}</td>
   </tr>
  )
}

function CourseHead() {
    return(
        <tr>
        <th>Title</th>
        <th>Fee</th>
        <th>Discount %</th>
    </tr>

    )
}

export default function CourseList2(props) {
    return (
        <div>
            <h1>Courses</h1>
            Count : {props.courses.length}
            <p></p>
            <table className="table table-bordered">
                <thead>
                    <CourseHead />
                </thead>
                <tbody>
                    {
                        props.courses.map((c, idx) =>
                             <Course  course = {c} idx = {idx} />
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}
