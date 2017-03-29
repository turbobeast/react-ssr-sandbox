import React from 'react'
import Radium from 'radium'
import {
  profile,
  column,
  headshot,
  headshotH2,
  headshotImg,
  address,
  addressP,
  button,
} from './profile.css'

const Profile = ({ robot }) => (
  <div style={profile}>
    <div style={[column, headshot]}>
      <div>
        <img style={headshotImg} alt={robot.name} src={`//robohash.org/${robot.id}?size=200x200`} />
      </div>
      <h2 style={headshotH2}>{robot.name}</h2>
    </div>
    <div style={[column, address]}>
      <h3>Address</h3>
      <p style={addressP}>
        { robot.address.street},&nbsp;
        { robot.address.suite}
      </p>
      <p style={addressP}>{ robot.address.city}</p>
      <p style={addressP}>{ robot.address.zipcode}</p>
      <a style={button} href={`mailto:${robot.email}`}>Email</a>
    </div>
  </div>)

Profile.propTypes = {
  robot: React.PropTypes.object.isRequired,
}

export default Radium(Profile)
