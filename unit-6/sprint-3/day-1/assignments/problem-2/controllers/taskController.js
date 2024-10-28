const Task = require('../models/Task');

exports.addTask = (req, res) => {
  const { description } = req.body;
  const newTask = new Task({ description, user: req.user.id });

  newTask.save()
    .then(task => res.json(task))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.updateTaskStatus = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { status: 'completed', completionTimestamp: Date.now() },
    { new: true }
  )
    .then(task => task ? res.json(task) : res.status(404).json({ msg: 'Task not found' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.getMemberTasks = (req, res) => {
  Task.find({ user: req.user.id })
    .then(tasks => res.json(tasks))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.getAllTasks = (req, res) => {
  Task.find({})
    .then(tasks => res.json(tasks))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.getAdminStats = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tasksAddedToday = await Task.countDocuments({ createdAt: { $gte: today } });
    const tasksCompletedToday = await Task.countDocuments({ completionTimestamp: { $gte: today } });
    res.json({
      tasksAddedToday,
      tasksCompletedToday,
      completionRate: (tasksCompletedToday / tasksAddedToday) || 0,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
