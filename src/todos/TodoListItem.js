import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemoveTodo, onCompleteTodo }) => (
    <div className="todo-item-container">
        <h3 className={`${todo.isCompleted ? 'todo-completed' : ''}`}>{todo.text}</h3>
        <div className="buttons-container">
            <button className={`completed-button ${todo.isCompleted ? 'btn-disabled' : ''}`} onClick={() => {
                onCompleteTodo(todo.id)
            }}>Mark As Completed</button>
            <button className="remove-button" onClick={() => {
                onRemoveTodo(todo.id);
            }}>Remove</button>
        </div>
    </div>
);

export default TodoListItem;