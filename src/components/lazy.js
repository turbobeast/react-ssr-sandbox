import React, { Component } from 'react'

class Lazy extends Component {
  componentWillMount() {
    this.setState({
      mod: null,
    })
    this.props.load((mod) => {
      this.setState({
        mod: mod.default,
      })
    })
  }

  render() {
    return this.props.children(this.state.mod)
  }
}

Lazy.propTypes = {
  load: React.PropTypes.func.isRequired,
  children: React.PropTypes.func.isRequired,
}

export default Lazy
