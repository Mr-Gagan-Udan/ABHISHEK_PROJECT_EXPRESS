import React from 'react';

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <small>Due: {new Date(task.dueDate).toLocaleDateString()}</small>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
