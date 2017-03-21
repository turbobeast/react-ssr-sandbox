import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import Profile from './profile'
import { profilePage, button } from './profile.css'

class ProfileView extends Component {
  componentWillMount() {
    this.props.getRobots()
  }

  render() {
    const { isPending, robot } = this.props
    return (
      <div style={profilePage}>
        {
          isPending
          ? <h2>Loading... </h2>
          : <Profile robot={robot} />
        }
        <Link style={button} to="/">Back</Link>
      </div>
    )
  }
}

ProfileView.defaultProps = {
  robot: null,
}

ProfileView.propTypes = {
  isPending: React.PropTypes.bool.isRequired,
  robot: React.PropTypes.object,
  getRobots: React.PropTypes.func.isRequired,
}

export default Radium(ProfileView)
