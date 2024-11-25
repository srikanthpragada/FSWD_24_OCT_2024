import React, { Component } from 'react'

export default class CourseCC extends Component {
 
    constructor(props) {
        super(props)
        this.props = props 
    }

    render() {
        return (
            <div>
                <h2>Course Details - Class Component</h2>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <td>{this.props.title}</td>
                        </tr>
                        <tr>
                            <th>Course Fee</th>
                            <td>{this.props.fee}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}
