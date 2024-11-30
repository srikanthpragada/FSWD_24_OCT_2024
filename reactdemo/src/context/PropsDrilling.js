import React from 'react'

export default function PropsDrilling() {
    const details = { course: 'React', trainer: 'Srikanth Pragada' }
    return (
        <>
            <h1>Parent</h1>
            This is parent passing data to child!!
            <hr/>
            <Child details={details} />
        </>
    )
}

function Child(props) {
    return (
        <>
            <h2>Child </h2>
            This is child component passing data to grandchild!!
            <hr/>
            <GrandChild details={props.details} />
        </>
    )
}

function GrandChild(props) {
    return (
        <>
            <h2>Grand Child </h2>
            This is grand child!!
            <h4>Course : {props.details.course} </h4>
            <h4>Trainer : {props.details.trainer} </h4>
            <hr/>
        </>
    )
}