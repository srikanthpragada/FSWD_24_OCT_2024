import React, { Component } from 'react'

export default class WishCC extends Component {
    constructor(props) {
        super(props)
        this.name  = props.name 
        // Associate wish method with an object  that becomes this object 
        this.wish = this.wish.bind(this);
    }

    wish() {
        let hours = new Date().getHours()
        let msg = "Good Evening"
        if (hours < 12)
            msg = "Good Morning"
        else
            if (hours < 17)
                msg = "Good Afternoon"

        alert(msg + " " + this.name)
    }
    render() {
        return (
            <div>
                <h2>Wishing</h2>
                <button onClick={this.wish}>Wish</button>
            </div>

        )
    }
}
