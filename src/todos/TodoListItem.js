import React from 'react';
import styled from 'styled-components';
import './TodoListItem.css';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`
export const getBorderStyleForDate = (startingDate, currentDate) => (startingDate > new Date(currentDate - 86400000*5)) ? 'none' : '2px solid red'

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${ props => (new Date(props.createdAt) > new Date(Date.now() - 864000*5) ? 'none' : '2px solid red')};
`

const ButtonContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`

const CompletedButton = styled(Button)`
    display: inline-block;
    background-color: #22ee22;
`

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`
const TodoListItem = ({ todo, onRemoveTodo, onCompleteTodo }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning
    return (
    <Container createdAt={todo.createdAt}>
        <h3 className={`${todo.isCompleted ? 'todo-completed' : ''}`}>{todo.text}</h3>
        <p>Create at:&nbsp; {(new Date(todo.createdAt)).toLocaleString()}</p>
        <ButtonContainer>
            <CompletedButton className={`completed-button ${todo.isCompleted ? 'btn-disabled' : ''}`} onClick={() => {
                onCompleteTodo(todo.id)
            }}>Mark As Completed</CompletedButton>
            <RemoveButton onClick={() => {
                onRemoveTodo(todo.id);
            }}>Remove</RemoveButton>
        </ButtonContainer>
    </Container>
)};

export default TodoListItem;