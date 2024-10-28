
document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3500/tickets';
    const taskList = document.getElementById('task-list');
    const statusFilter = document.getElementById('status-filter');
    const pagination = document.getElementById('pagination');
    const addTaskButton = document.getElementById('add-task');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('dueDate');

    let currentPage = 1;
    const tasksPerPage = 5;

    // Function to calculate priority based on remaining time
    function calculatePriority(dueDate) {
        const now = new Date();
        const due = new Date(dueDate);
        const timeRemaining = (due - now) / 1000 / 60; // time in minutes

        if (timeRemaining <= 1) return 'High';
        if (timeRemaining <= 2) return 'Medium';
        return 'Low';
    }

    // Function to fetch and display tasks with pagination and filtering
    async function fetchAndDisplayTasks(page = 1, filterStatus = 'All') {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Failed to fetch tasks');

            const tasks = await response.json();
            const filteredTasks = filterStatus === 'All' ? tasks : tasks.filter(task => task.status === filterStatus);

            const start = (page - 1) * tasksPerPage;
            const end = start + tasksPerPage;
            const paginatedTasks = filteredTasks.slice(start, end);

            displayTasks(paginatedTasks);
            displayPagination(filteredTasks.length, page);
        } catch (error) {
            taskList.innerHTML = `<p>${error.message}</p>`;
        }
    }

    // Function to display tasks
    function displayTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const priority = calculatePriority(task.dueDate);
            const priorityClass = priority.toLowerCase() + '-priority';

            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <div>
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <p><strong>Due:</strong> ${new Date(task.dueDate).toLocaleString()}</p>
                    <p><strong>Status:</strong> ${task.status}</p>
                    <p class="priority ${priorityClass}"><strong>Priority:</strong> ${priority}</p>
                </div>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // Function to display pagination buttons
    function displayPagination(totalTasks, currentPage) {
        pagination.innerHTML = '';
        const totalPages = Math.ceil(totalTasks / tasksPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = 'pagination-button';
            pageButton.textContent = i;
            pageButton.onclick = () => fetchAndDisplayTasks(i, statusFilter.value);
            pagination.appendChild(pageButton);
        }
    }

    // Function to add a new task
    async function addTask() {
        const newTask = {
            title: titleInput.value,
            description: descriptionInput.value,
            status: 'Open',
            dueDate: dueDateInput.value
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });

            if (!response.ok) throw new Error('Failed to add task');
            fetchAndDisplayTasks(currentPage, statusFilter.value);
        } catch (error) {
            alert(error.message);
        }
    }

    // Function to delete a task
    async function deleteTask(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete task');
            fetchAndDisplayTasks(currentPage, statusFilter.value);
        } catch (error) {
            alert(error.message);
        }
    }

    // Event listeners
    addTaskButton.addEventListener('click', addTask);
    statusFilter.addEventListener('change', () => fetchAndDisplayTasks(1, statusFilter.value));

    // Initial fetch of tasks
    fetchAndDisplayTasks();
});
