import React from 'react'
import PropTypes from 'prop-types';

export default function CourseValidate(props) {
    return (
        <div>
            <h2>Course Details</h2>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>{props.title}</td>
                    </tr>
                    <tr>
                        <th>Course Fee</th>
                        <td>{props.fee}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


CourseValidate.propTypes = {
    title: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired
};