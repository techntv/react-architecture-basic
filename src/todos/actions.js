export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED'
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILED = 'LOAD_TODOS_FAILED'

export const createTodo = todo => ({
  type: CREATE_TODO,
  payload: { todo }
})

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  payload: { todo }
})

export const markTodoComplete = todo => ({
  type: MARK_AS_COMPLETED,
  payload: { todo }
})

export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS
})

export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos }
})

export const loadTodosFailed = () => ({
  type: LOAD_TODOS_FAILED,
})