import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Profile from './profile'

class ProfileView extends Component {
  componentWillMount() {
    this.props.getRobots()
  }

  render() {
    const { isPending, robot } = this.props
    return (
      <div className="profilePage">
        {
          isPending
          ? <h2>Loading... </h2>
          : <Profile robot={robot} />
        }
        <Link className="button" to="/">Back</Link>
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