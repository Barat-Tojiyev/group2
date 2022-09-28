import React, { Component } from 'react'

export default class App extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>App</div>
    )
  }
}
