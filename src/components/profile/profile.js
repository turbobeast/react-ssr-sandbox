import React from 'react'

const Profile = ({ robot }) => (
  <div className="profile">
    <div className="column headshot">
      <div>
        <img alt={robot.name} src={`//robohash.org/${robot.id}?size=200x200`} />
      </div>
      <h2>{robot.name}</h2>
    </div>
    <div className="column address">
      <h3>Address</h3>
      <p>
        { robot.address.street},&nbsp;
        { robot.address.suite}
      </p>
      <p>{ robot.address.city}</p>
      <p>{ robot.address.zipcode}</p>
      <a className="button" href={`mailto:${robot.email}`}>Email</a>
    </div>
  </div>)

Profile.propTypes = {
  robot: React.PropTypes.object.isRequired,
}

export default Profile
