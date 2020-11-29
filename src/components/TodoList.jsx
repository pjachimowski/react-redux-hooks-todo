import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    return(
        <div className="my-3">
            <h3>TodoList</h3>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList;