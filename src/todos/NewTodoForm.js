import React, { useState } from 'react';
import './NewTodoForm.css';
import { connect } from 'react-redux'
import { addTodo } from './thunks'

const NewTodoForm = ({ todos, onCreateTodo}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button onClick={() => {
                if(!inputValue) return null
                const isDuplicateText = todos.some(todo => todo.text === inputValue)
                if(!isDuplicateText){
                    onCreateTodo(inputValue)
                    setInputValue('')
                }
            }} className="new-todo-button">Create Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onCreateTodo: (text) => dispatch(addTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);