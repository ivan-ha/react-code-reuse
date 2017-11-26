import React, { PureComponent } from 'react'
import styles from './styles'

class App extends PureComponent {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = ({ clientX, clientY }) => {
    this.setState({
      x: clientX,
      y: clientY
    })
  }

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
}

export default App
