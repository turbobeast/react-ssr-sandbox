import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import appReducer from '../reducers'

let initialState

try {
  initialState = window.INITIAL_STATE
  delete window.INITIAL_STATE
} catch (_) {
  initialState = undefined
}
export default () => createStore(appReducer, initialState, applyMiddleware(reduxThunk))
