import React, { Component } from 'react'
import { render } from ReactDOM

class Hello extends Component {
  render() {
    return (
      <h1>Hello, World</h1>
    )
  }
}

render(<Hello />, document.querySelector('#index'))
