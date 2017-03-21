import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './app.css'
import RobotFilterViewContainer from '../../containers/robot-filter-view.container'
import RobotProfileViewContainer from '../../containers/robot-profile-view.container'

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      <Switch>
        <Route path="/" exact component={RobotFilterViewContainer} />
        <Route path="/profile/:id" component={RobotProfileViewContainer} />
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  )
}

export default App
