import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/app/app'
import storeFactory from './store'

ReactDOM.render(
  <Provider store={storeFactory()}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
