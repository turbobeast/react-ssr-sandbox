import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import appReducer from '../reducers'

export default createStore(appReducer, applyMiddleware(reduxThunk, logger))
