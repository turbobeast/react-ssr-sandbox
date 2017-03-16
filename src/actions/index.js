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


export const getRobots = () => (dispatch) => {
  dispatch({ type: GET_ROBOTS_IS_PENDING })

  fetch('https://jsonplaceholder.typicode.com/users')
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
