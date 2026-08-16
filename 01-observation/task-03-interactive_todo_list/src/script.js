// Select the elements we need
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

// Show/hide the "No tasks available" message based on list content
function updateEmptyMessage() {
emptyMsg.style.display = taskList.children.length === 0 ? 'block' : 'none';
}

// Create and add a new task item to the list
function addTask() {
const text = taskInput.value.trim();
if (text === '') return; // ignore empty input

// Create list item and its children
const li = document.createElement('li');
const span = document.createElement('span');
span.textContent = text;

const completeBtn = document.createElement('button');
completeBtn.textContent = 'Complete';

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';

// Mark task as completed (toggle strike-through style)
completeBtn.addEventListener('click', () => {
    span.classList.toggle('done');
});

// Remove task from the list
deleteBtn.addEventListener('click', () => {
    li.remove();
    updateEmptyMessage();
});

// Assemble the task item and add it to the list
li.appendChild(span);
li.appendChild(completeBtn);
li.appendChild(deleteBtn);
taskList.appendChild(li);

taskInput.value = ''; // clear input box
updateEmptyMessage();
}

// Add task on button click
addBtn.addEventListener('click', addTask);

// Also allow pressing Enter to add a task
taskInput.addEventListener('keydown', (e) => {
if (e.key === 'Enter') addTask();
});

updateEmptyMessage(); // initial check on page load