import {
  ADD_TODO_REQUEST,
  ADD_TODO_REQUEST_SUCCESS,
  ADD_TODO_REQUEST_FAILED
} from '../constants/todo';

export default function todo(state = { todos: [], fetching: false }, action) {
  switch (action.type) {
  case ADD_TODO_REQUEST:
    return {
      ...state,
      fetching: true
    };
  case ADD_TODO_REQUEST_SUCCESS:
    return {
      ...state,
      todos: action.payload,
      fetching: false
    };
  case ADD_TODO_REQUEST_FAILED:
    return {
      ...state,
      error: action.error,
      fetching: false
    };
  default:
    return state;
  }
}
