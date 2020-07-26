import { createSelector } from 'reselect'

export const getTodos = state => state.todos.todos
export const getTodosLoading = state => state.todos.isLoading

export const getIncompleteTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => !todo.isCompleted)
);

export const getCompleteTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => todo.isCompleted)
)