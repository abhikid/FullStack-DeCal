const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());


let todos = [];
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;

  if (!task || task.trim() === '') {
    return res.status(400).json({ error: 'Task cannot be empty' });
  }

  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).send('To-Do item not found');
  }

  todo.task = task || todo.task;
  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).send('To-Do item not found');
  }

  todos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});