import {
  SET_SEARCH_TERM,
  GET_ROBOTS_IS_PENDING,
  GET_ROBOTS_WAS_SUCCESSFUl,
  GET_ROBOTS_HAD_ERROR,
} from '../constants'

export const setSearchTerm = term => ({
  type: SET_SEARCH_TERM,
  payload: term,
})

export const getRobots = api => (dispatch) => {
  dispatch({ type: GET_ROBOTS_IS_PENDING })

  fetch(api)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: GET_ROBOTS_WAS_SUCCESSFUl,
          payload: data,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_ROBOTS_HAD_ERROR,
          payload: error,
        })
      })
}

export const handleNavigation = action => (dispatch, getState) => {
  const API_BASE = 'https://jsonplaceholder.typicode.com/users'
  const url = action.payload.url
  const request_url = `${API_BASE}${url.replace('profile/', '')}`

  const robots = getState().robotData.robots
  if (/profile/.test(url)) {
    const robotId = parseInt(url.replace('/profile/', ''), 10)
    if (robots.find(rob => rob.id === robotId)) {
      return
    }
  }

  if (robots.length >= 10) {
    return
  }
  setTimeout(() => getRobots(request_url)(dispatch), 1)
}
