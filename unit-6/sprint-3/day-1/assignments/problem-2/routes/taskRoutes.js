const express = require('express');
const { addTask, updateTaskStatus, getMemberTasks, getAllTasks, getAdminStats } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/tasks', authMiddleware(['MEMBER']), addTask);
router.patch('/tasks/:id', authMiddleware(['MEMBER']), updateTaskStatus);
router.get('/tasks', authMiddleware(['MEMBER', 'MANAGER', 'ADMIN']), getMemberTasks);
router.get('/tasks/all', authMiddleware(['MANAGER', 'ADMIN']), getAllTasks);
router.get('/admin/stats', authMiddleware(['ADMIN']), getAdminStats);

module.exports = router;
