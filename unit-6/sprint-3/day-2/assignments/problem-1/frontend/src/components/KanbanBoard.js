import React, { useState, useEffect } from 'react';
import TaskForm from './Task/TaskForm';
import TaskTable from './Task/TaskTable';
import { fetchTasks } from '../services/api';

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    const { data } = await fetchTasks();
    setTasks(data);
  };

  const handleSave = () => {
    setEditingTask(null);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <TaskForm task={editingTask} onSave={handleSave} />
      <TaskTable tasks={tasks} onEdit={setEditingTask} onDelete={loadTasks} />
    </div>
  );
}

export default KanbanBoard;
