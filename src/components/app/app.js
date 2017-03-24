import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './app.css'
import Lazy from '../lazy'
import RobotFilterViewContainer from '../../containers/robot-filter-view.container'

const loadProfile = process.env.NODE_SERVER
  ? cb => cb(require('../../containers/robot-profile-view.container'))
  : cb => require.ensure([], (require) => {
    cb(require('../../containers/robot-profile-view.container'))
  }, 'profile')

// import('../../containers/robot-profile-view.container')

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      <Switch>
        <Route path="/" exact component={RobotFilterViewContainer} />
        <Route
          path="/profile/:id"
          render={props => <Lazy {...props} load={loadProfile} />}
        />
        {/* <Route path="/profile/:id" component={RobotProfileViewContainer} />*/}
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  )
}

export default App
