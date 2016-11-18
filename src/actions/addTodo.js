import {
  ADD_TODO_REQUEST,
  ADD_TODO_REQUEST_SUCCESS,
  ADD_TODO_REQUEST_FAILED
} from '../constants/todo';

export function addTodo(todo) {

  return (dispatch) => {
    dispatch({
      type: ADD_TODO_REQUEST,
      todo
    });

    // TODO export endpoint

    fetch('http://dev.local:8080/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        todo: todo
      })
    }).then(response => response.ok ? response.json() : Error(response.error))
      .then(response => dispatch( { type: ADD_TODO_REQUEST_SUCCESS, payload: response} ))
      .catch(error => dispatch({ type: ADD_TODO_REQUEST_FAILED, error: error } ));
  };

}


