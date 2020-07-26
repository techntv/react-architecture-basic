import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getTodos, getTodosLoading, getCompleteTodos, getIncompleteTodos } from './selectors'

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`

import { loadTodos, deleteTodo, markAsCompleted } from './thunks'

const TodoList = ({ completedTodos, incompleteTodos, onRemoveTodo, onCompleteTodo, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    },[])
    const loadingMessage = <div>Loading...</div>
    const content = <ListWrapper>
        <NewTodoForm />
        <h3>Incomplete: </h3>
        {incompleteTodos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo}/>)}
        <br />
        <br/>
        <hr />
        <h3>Complete: </h3>
        {completedTodos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo}/>)}
    </ListWrapper>

    return isLoading ? loadingMessage : content
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompleteTodos(state),
    incompleteTodos: getIncompleteTodos(state)
})

const mapDispatchToProps = dispatch => ({
    onRemoveTodo: id => dispatch(deleteTodo(id)),
    onCompleteTodo : id => dispatch(markAsCompleted(id)),
    startLoadingTodos: () => dispatch(loadTodos())
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);