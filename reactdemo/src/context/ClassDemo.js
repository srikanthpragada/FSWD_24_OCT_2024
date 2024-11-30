import React from 'react'

const MyContext = React.createContext();

export default class ClassDemo extends React.Component {
    // static contextType = MyContext
    render() {
        const details = { course: 'React', trainer: 'Srikanth Pragada' }
        return (
            <MyContext.Provider value={details}>
                <h1>Parent </h1>
                <Child />
            </MyContext.Provider>
        )
    }
}

class Child extends React.Component {
    render() {
        return (
            <>
                <h2>Child </h2>
                <GrandChild />
            </>
        )
    }
}
class GrandChild extends React.Component {
    static contextType = MyContext;
    render() {
        let details = this.context
        return (
            <>
                <h2>GrandChild </h2>
                <h3>{details.course}</h3>
                <h3>{details.trainer}</h3>
            </>

        )
    }
}