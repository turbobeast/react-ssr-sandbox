import { combineReducers } from 'redux'
import {
  SET_SEARCH_TERM,
  GET_ROBOTS_IS_PENDING,
  GET_ROBOTS_WAS_SUCCESSFUl,
  GET_ROBOTS_HAD_ERROR,
} from '../constants'

const searchInitialState = { searchTerm: '' }
const searchReducer = (state = searchInitialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: action.payload })
    default:
      return state
  }
}

const robotInitialState = {
  robots: [],
  isPending: true,
  error: '',
}

const robotReducer = (state = robotInitialState, action = {}) => {
  switch (action.type) {
    case GET_ROBOTS_IS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case GET_ROBOTS_WAS_SUCCESSFUl:
      return Object.assign({}, state, {
        robots: [].concat(action.payload),
        isPending: false,
      })
    case GET_ROBOTS_HAD_ERROR:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state
  }
}

export default combineReducers({
  search: searchReducer,
  robotData: robotReducer,
})
