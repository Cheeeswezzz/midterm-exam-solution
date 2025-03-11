// Array to store todos
let tasks = [];
let nextId = 1;

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Render tasks
function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${task.name}</span>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Add task
function addTask(event) {
    event.preventDefault();
    const name = todoInput.value.trim();
    if (name) {
        const task = { id: nextId++, name };
        tasks.push(task);
        todoInput.value = '';
        renderTasks();
    }
}

// Edit task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newName = prompt('Edit task name:', task.name);
        if (newName !== null) {
            task.name = newName.trim();
            renderTasks();
        }
    }
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Event Listener
todoForm.addEventListener('submit', addTask);

// Initial render
renderTasks();
