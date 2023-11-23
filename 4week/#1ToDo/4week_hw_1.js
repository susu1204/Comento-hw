// Sample tasks array
let tasks = [];

// Function to render tasks
function renderTasks() {
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        // 추가된 체크박스
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false; // 초기값은 미체크 상태
        checkbox.addEventListener('change', () => toggleTaskStatus(index));
        
        taskElement.appendChild(checkbox);

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.classList.add('task-text');
        taskElement.appendChild(taskText);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(index));
        taskElement.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));
        taskElement.appendChild(deleteButton);

        tasksContainer.appendChild(taskElement);
    });
}

// 새로 추가된 함수 - 체크박스 상태 변경 시 호출됨
function toggleTaskStatus(index) {
    const checkbox = document.querySelectorAll('.task input[type="checkbox"]')[index];
    const taskText = document.querySelectorAll('.task-text')[index];

    if (checkbox.checked) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
}


// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const editedTask = prompt('Edit task:', tasks[index]);
    if (editedTask !== null) {
        tasks[index] = editedTask.trim();
        renderTasks();
    }
}

// Function to clear all tasks
function clearTasks() {
    tasks = [];
    renderTasks();
}

// Initial rendering
renderTasks();
