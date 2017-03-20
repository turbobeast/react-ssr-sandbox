import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './app.css'
import RobotFilterViewContainer from '../../containers/robot-filter-view.container'
import Lazy from '../lazy'

 /* eslint-disable */
const profileLoader = process.env.NODE_SERVER
  ? (fn) => fn(require('../../containers/robot-profile-view.container'))
  : require('bundle-loader?lazy&name=profile!../../containers/robot-profile-view.container')
/* eslint-enable */

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      <Switch>
        <Route path="/" exact component={RobotFilterViewContainer} />
        <Route
          path="/profile/:id"
          render={props =>
            <Lazy load={profileLoader}>
              {
                (Comp) => {
                  if (Comp) {
                    return <Comp {...props} />
                  }
                  return <h2>loading...</h2>
                }
              }
            </Lazy>
          }
        />
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  )
}

export default App
