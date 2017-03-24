import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNavigation } from '../actions'

class NavigationDispatcher extends Component {
  componentWillMount() {
    this.props.handleNavigation(this.props.match.url)
  }

  render() {
    return <this.props.component {...this.props} />
  }
}

const mapDispatchToProps = dispatch => ({
  handleNavigation: url => dispatch(handleNavigation({
    payload: { url },
  })),
})

NavigationDispatcher.propTypes = {
  match: React.PropTypes.object.isRequired,
  handleNavigation: React.PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(NavigationDispatcher)

