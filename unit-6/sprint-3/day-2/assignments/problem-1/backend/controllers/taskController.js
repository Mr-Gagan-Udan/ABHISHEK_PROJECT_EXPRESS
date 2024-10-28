const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = new Task({ title, description, dueDate, createdBy: req.user.id });

  await task.save();
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({}).populate('createdBy', 'username').exec();
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedTask);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: 'Task deleted successfully' });
};
