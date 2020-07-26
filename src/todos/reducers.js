import { v4 as uuidv4 } from 'uuid';
import { CREATE_TODO, REMOVE_TODO, MARK_AS_COMPLETED, LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILED } from './actions'
const initialState = []

export const isLoading = (state = false, action) => {
  const { type } = action
  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILED:
      return false
    default:
      return state;
  }
}

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }

    case REMOVE_TODO: {
      const { todo : todoToRemove } = payload;
      return state.filter(todo => todo.id != todoToRemove.id)
    }

    case MARK_AS_COMPLETED: {
      const { todo : todoToCompleted } = payload;
      return state.map(todo => todo.id === todoToCompleted.id ? todoToCompleted : todo)
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILED:
    default:
      return state;
  }
}