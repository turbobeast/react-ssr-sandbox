import React from 'react'
import { Route } from 'react-router-dom'
import './app.css'
import RobotFilterViewContainer from '../../containers/robot-filter-view.container'
import RobotProfileViewContainer from '../../containers/robot-profile-view.container'

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      <Route path="/" exact component={RobotFilterViewContainer} />
      <Route path="/profile/:id" component={RobotProfileViewContainer} />
    </div>
  )
}

export default App
