import React from 'react'
import './app.css'
// import RobotFilterViewContainer from '../../containers/robot-filter-view.container'
import RobotProfileViewContainer from '../../containers/robot-profile-view.container'

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      {/* <RobotFilterViewContainer /> */}
      <RobotProfileViewContainer />
    </div>
  )
}

export default App
