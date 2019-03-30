import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Radium from 'radium'
import './app.css'
import RobotFilterViewContainer from '../../containers/robot-filter-view.container'
import Lazy from '../lazy'

const robotProfileLoader = process.env.NODE_SERVER
  ? cb => cb(require('../../containers/robot-profile-view.container').default)
  : cb => require.ensure([], (require) => {
    cb(require('../../containers/robot-profile-view.container').default)
  }, 'profile')

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      <Switch>
        <Route path="/" exact component={RobotFilterViewContainer} />
        <Route
          path="/profile/:id"
          render={props => <Lazy load={robotProfileLoader} {...props} />}
        />
        <Redirect to={{ pathname: '/' }} />
      </Switch>
    </div>
  )
}

export default Radium(App)
