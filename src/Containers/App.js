import React from 'react'
import createReactClass from 'create-react-class'
import styles from './styles'

const MouseMixin = {
  getInitialState () {
    return {
      x: 0,
      y: 0
    }
  },

  handleMouseMove ({ clientX, clientY }) {
    this.setState({
      x: clientX,
      y: clientY
    })
  }
}

const App = createReactClass({
  mixins: [MouseMixin],

  render () {
    const { x, y } = this.state

    return (
      <div style={styles.container} onMouseMove={this.handleMouseMove}>
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      </div>
    )
  }
})

export default App
