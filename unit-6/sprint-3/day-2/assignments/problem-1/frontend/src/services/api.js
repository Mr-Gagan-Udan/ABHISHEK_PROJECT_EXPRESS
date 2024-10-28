import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = (form) => API.post('/auth/login', form);
export const register = (form) => API.post('/auth/register', form);
export const fetchTasks = () => API.get('/tasks');
export const createTask = (task) => API.post('/tasks', task);
export const updateTask = (id, task) => API.patch(`/tasks/${id}`, task);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
