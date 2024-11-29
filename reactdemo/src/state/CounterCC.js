import React, { Component, useState } from 'react'

export default class CounterCC extends Component {
  constructor() {
    super()
    this.state = { counter: 0 }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }
  decrement() {
    this.setState({ counter: this.state.counter - 1 })
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Inc</button>
        &nbsp;
        <button onClick={this.decrement}>Dec</button>
      </div>
    )
  }
}
