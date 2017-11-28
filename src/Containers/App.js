import React, { PureComponent } from 'react'
import styles from './styles'

class Mouse extends PureComponent {
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
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    )
  }
}

class App extends PureComponent {
  render () {
    const { message } = this.props

    return (
      <Mouse>
        {({ x, y }) => (
          <div style={styles.container}>
            <h1>
              The mouse position is ({x}, {y}). The message is {message}
            </h1>
          </div>
        )}
      </Mouse>
    )
  }
}

export default App
