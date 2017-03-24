import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleNavigation } from '../../actions'
import './app.css'
import RobotFilterViewContainer from '../../containers/robot-filter-view.container'
import RobotProfileViewContainer from '../../containers/robot-profile-view.container'

function App(props) {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
      <Switch>
        <Route
          path="/"
          exact
          render={(renderProps) => {
            props.handleNavigation(renderProps.match.url)
            return <RobotFilterViewContainer {...renderProps} />
          }}
        />
        <Route
          path="/profile/:id"
          render={(renderProps) => {
            props.handleNavigation(renderProps.match.url)
            return <RobotProfileViewContainer {...renderProps} />
          }}
        />
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  )
}

App.propTypes = {
  handleNavigation: React.PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleNavigation: url => dispatch(handleNavigation({
    payload: { url },
  })),
})

export default connect(null, mapDispatchToProps)(App)
