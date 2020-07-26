import React, { useState } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addTodo } from './thunks'
import { getTodos } from './selectors'

const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`

const NewTodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`
const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`
const NewTodoForm = ({ todos, onCreateTodo}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <FormContainer>
            <NewTodoInput
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <NewTodoButton onClick={() => {
                if(!inputValue) return null
                const isDuplicateText = todos.some(todo => todo.text === inputValue)
                if(!isDuplicateText){
                    onCreateTodo(inputValue)
                    setInputValue('')
                }
            }}>Create Todo</NewTodoButton>
        </FormContainer>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
})

const mapDispatchToProps = dispatch => ({
    onCreateTodo: (text) => dispatch(addTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);