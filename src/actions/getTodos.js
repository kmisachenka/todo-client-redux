import {
  GET_TODOS_REQUESTS,
  GET_TODOS_REQUEST_SUCCESS,
  GET_TODOS_REQUEST_FAILED
} from '../constants/todo';

export function getTodos() {

  return (dispatch) => {
    dispatch({
      type: GET_TODOS_REQUESTS
    });

    // TODO export endpoint

    fetch('http://local.dev:8080/todos')
      .then(response => response.json())
      .then(response => dispatch({ type: GET_TODOS_REQUEST_SUCCESS, payload: response.todos, fetching: false }))
      .catch(error => dispatch({ type: GET_TODOS_REQUEST_FAILED, error: error } ))

  }

}
