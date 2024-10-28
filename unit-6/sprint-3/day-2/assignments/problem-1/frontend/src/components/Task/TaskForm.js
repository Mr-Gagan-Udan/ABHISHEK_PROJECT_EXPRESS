import React, { useState } from 'react';
import { createTask, updateTask } from '../../services/api';

function TaskForm({ task, onSave }) {
  const [form, setForm] = useState(task || { title: '', description: '', dueDate: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      task ? await updateTask(task._id, form) : await createTask(form);
      onSave();
    } catch (error) {
      alert('Task submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} value={form.title} />
      <textarea name="description" placeholder="Description" onChange={handleChange} value={form.description} />
      <input name="dueDate" type="date" onChange={handleChange} value={form.dueDate} />
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
