import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux'
import { loadTodos, deleteTodo, markAsCompleted } from './thunks'

const TodoList = ({ todos = [], onRemoveTodo, onCompleteTodo, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    },[])
    const loadingMessage = <div>Loading...</div>
    const content = <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo}/>)}
    </div>

    return isLoading ? loadingMessage : content
};

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
    onRemoveTodo: id => dispatch(deleteTodo(id)),
    onCompleteTodo : id => dispatch(markAsCompleted(id)),
    startLoadingTodos: () => dispatch(loadTodos())
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);