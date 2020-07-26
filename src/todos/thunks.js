import { loadTodosSuccess, loadTodosFailed, loadTodosInProgress, createTodo, removeTodo, markTodoComplete } from './actions'
const API_URL = 'http://localhost:8080'
export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress())
    const response = await fetch(`${API_URL}/todos-delay`)
    const todos = await response.json()
    dispatch(loadTodosSuccess(todos))
  } catch (error) {
    dispatch(loadTodosFailed())
    dispatch(displayAlert(e))
  }
}

export const addTodo = text => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text })
    const response = await fetch(`${API_URL}/todos`, {
      headers: { 'Content-Type': 'application/json'},
      method: 'POST',
      body
    })
    const todo = await response.json();
    dispatch(createTodo(todo));
    dispatch(displayAlert('Add Completed'))
  } catch (error) {
    dispatch(displayAlert(e))
  }
}

export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todoId}`, {
      headers: { 'Content-Type': 'application/json'},
      method: 'DELETE'
    })
    const todo = await response.json()
    dispatch(removeTodo(todo))
    dispatch(displayAlert('Delete Completed'))
  } catch (error) {
    dispatch(displayAlert(e))
  }
}

export const markAsCompleted = todoId => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todoId}/completed`, {
      headers: { 'Content-Type': 'application/json'},
      method: 'POST'
    })

    const todoCompleted = await response.json()
    dispatch(markTodoComplete(todoCompleted))
    dispatch(displayAlert('Update Completed'))
  } catch (error) {
    dispatch(displayAlert(e))
  }
}
export const displayAlert = text => () => {
  alert(text)
}