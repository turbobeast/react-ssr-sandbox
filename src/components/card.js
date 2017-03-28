import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, name, email }) => (
  <Link to={`/profile/${id}`}>
    <div className="grow bg-light-green br3 pa3 ma2 dib">
      <img alt={name} src={`//robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  </Link>
  )

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
}

export default Card
