import React, { Component } from 'react'
import Profile from './profile'
import './profile.css'

class ProfileView extends Component {
  componentWillMount() {
    this.props.getRobots()
  }

  render() {
    const { isPending, robot } = this.props
    return (
      <div className="profilePage">
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

export default ProfileView
