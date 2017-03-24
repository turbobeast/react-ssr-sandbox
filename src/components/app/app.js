import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './app.css'
import RobotFilterViewContainer from '../../containers/robot-filter-view.container'
import RobotProfileViewContainer from '../../containers/robot-profile-view.container'
import NavigationDispatcher from '../../containers/navigation-dispatcher.container'

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      <Switch>
        <Route
          path="/"
          exact
          render={props =>
            <NavigationDispatcher component={RobotFilterViewContainer} {...props} />
                 }
        />
        <Route
          path="/profile/:id"
          render={props =>
            <NavigationDispatcher component={RobotProfileViewContainer} {...props} />
                 }
        />
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  )
}

export default App
