import React from 'react';
import TaskCard from './TaskCard';

function TaskTable({ tasks, onEdit, onDelete }) {
  return (
    <div className="task-table">
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskTable;
