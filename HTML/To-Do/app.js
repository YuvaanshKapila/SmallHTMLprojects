const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function completeTask(button) {
  const taskItem = button.parentNode;
  taskItem.classList.toggle('completed');
}

function removeTask(button) {
  const taskItem = button.parentNode;
  taskList.removeChild(taskItem);
}
