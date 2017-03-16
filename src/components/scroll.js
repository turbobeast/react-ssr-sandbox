import React from 'react'

const Scroll = props => (
  <div
    style={{ height: '80vh', overflowY: 'scroll', border: '1px solid black' }}
  >
    {props.children}
  </div>
  )

Scroll.propTypes = {
  children: React.PropTypes.array.isRequired,
}

export default Scroll
