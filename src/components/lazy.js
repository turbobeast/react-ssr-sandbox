import React, { Component } from 'react'

class Lazy extends Component {
  componentWillMount() {
    this.setState({
      component: null,
    })

    this.props.load((ponent) => {
      this.setState({
        component: ponent.default,
      })
    })
  }

  render() {
    return this.state.component
      ? <this.state.component {...this.props} />
      : <h2>Loading component... </h2>
  }
}

Lazy.propTypes = {
  load: React.PropTypes.func.isRequired,
}

export default Lazy
