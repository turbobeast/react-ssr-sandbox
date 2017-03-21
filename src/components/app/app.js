import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './app.css'
import Lazy from '../lazy'
import RobotFilterViewContainer from '../../containers/robot-filter-view.container'

/* eslint-disable */
const profileLoader = require('bundle-loader?lazy!../../containers/robot-profile-view.container')
/* eslint-enable */

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      <Switch>
        <Route path="/" exact component={RobotFilterViewContainer} />
        <Route
          path="/profile/:id"
          render={props => <Lazy load={profileLoader} {...props} />}
        />
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  )
}

export default App
