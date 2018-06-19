import React, { Component } from 'react'
import { render } from 'react-dom'

class Hello extends Component {
  render() {
    return (
      <h1>Hello, Fetch</h1>
    )
  }
}

render(<Hello />, document.querySelector('#index'))
