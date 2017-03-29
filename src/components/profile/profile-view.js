import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import Profile from './profile'
import {
  profilePage,
  back,
} from './profile.css'

class ProfileView extends Component {
  componentWillMount() {
    this.props.getRobots()
  }

  render() {
    const { isPending, robot } = this.props
    return (

      <div style={profilePage}>
        <Link style={back} to="/">&#9664;&nbsp;Back</Link>
        {
          (!isPending && robot)
          ? <Profile robot={robot} />
          : <h2>Loading... </h2>
        }

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
