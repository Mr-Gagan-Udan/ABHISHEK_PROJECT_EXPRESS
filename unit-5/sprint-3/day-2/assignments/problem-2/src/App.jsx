import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/actions";

const App = () => {
  const [todoText, setTodoText] = useState("");
  
  // Access the todos from the Redux store
  const todos = useSelector((state) => state.todos);
  
  // Dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(
        addTodo({
          id: Date.now(),
          text: todoText,
          completed: false,
        })
      );
      setTodoText("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo List Application</h1>
      
      {/* Input to add a new todo */}
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* Display the list of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
