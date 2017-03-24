import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './profile'
import './profile.css'

const ProfileView = (props) => {
  const { isPending, robot } = props
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

ProfileView.defaultProps = {
  robot: null,
}

ProfileView.propTypes = {
  isPending: React.PropTypes.bool.isRequired,
  robot: React.PropTypes.object,
}

export default ProfileView
