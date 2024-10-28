import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;