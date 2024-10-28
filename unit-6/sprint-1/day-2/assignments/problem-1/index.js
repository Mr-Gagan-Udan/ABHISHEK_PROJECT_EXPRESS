const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

const todosFilePath = path.join(__dirname, 'todos.json');

const readTodos = () => {
  const data = fs.readFileSync(todosFilePath, 'utf8');
  return JSON.parse(data);
};

const writeTodos = (todos) => {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
};

app.get('/todos', (req, res) => {
  const todosData = readTodos();
  res.status(200).json(todosData.todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;
  if (!newTodo || !newTodo.id || !newTodo.description || newTodo.status === undefined) {
    return res.status(400).json({ message: 'Please provide a valid todo (id, description, and status).' });
  }

  const todosData = readTodos();
  todosData.todos.push(newTodo);
  writeTodos(todosData);

  res.status(201).json({ message: 'Todo added successfully.', todo: newTodo });
});

app.patch('/todos/updateEven', (req, res) => {
  const todosData = readTodos();
  const updatedTodos = todosData.todos.map((todo) => {
    if (todo.id % 2 === 0 && todo.status === false) {
      todo.status = true;
    }
    return todo;
  });

  writeTodos({ todos: updatedTodos });
  res.status(200).json({ message: 'Status updated for even ID todos where status was false.' });
});

app.delete('/todos/deleteCompleted', (req, res) => {
  const todosData = readTodos();
  const remainingTodos = todosData.todos.filter((todo) => todo.status !== true);

  writeTodos({ todos: remainingTodos });
  res.status(200).json({ message: 'Deleted all todos with status true.' });
});

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`);
});
