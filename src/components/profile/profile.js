import React from 'react'
import Radium from 'radium'
import { profile, column, headshot, img, address, button } from './profile.css'

const Profile = ({ robot }) => (
  <div style={profile}>
    <div style={[column, headshot]}>
      <div>
        <img style={img} alt={robot.name} src={`//robohash.org/${robot.id}?size=200x200`} />
      </div>
      <h2 style={headshot.heading}>{robot.name}</h2>
    </div>
    <div style={[column, address]}>
      <h3>Address</h3>
      <p style={address.p}>
        { robot.address.street},&nbsp;
        { robot.address.suite}
      </p>
      <p style={address.p}>{ robot.address.city}</p>
      <p style={address.p}>{ robot.address.zipcode}</p>
      <a style={button} href={`mailto:${robot.email}`}>Email</a>
    </div>
  </div>)

Profile.propTypes = {
  robot: React.PropTypes.object.isRequired,
}

export default Radium(Profile)
