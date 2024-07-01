// Select elements and assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// Function to create a new task item
let createTask = function(task) {
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
  let label = document.createElement('label');

  label.innerText = task;
  checkBox.type = 'checkbox';

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
}

// Function to add a new task
let addTask = function(event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";

  // Bind the new list item to the incomplete list
  bindIncompleteItems(listItem, completeTask);
}

// Function to mark a task as complete
let completeTask = function() {
  let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.checked = true; // Ensure the checkbox is checked
    checkBox.disabled = true; // Disable the checkbox to indicate completion
    completeUl.appendChild(listItem);

    // Bind the delete function to the complete list item
    bindCompleteItems(listItem, deleteTask);
}

// Function to delete a task
let deleteTask = function() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
}

// Function to bind incomplete items with the complete task handler
let bindIncompleteItems = function(taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
}

// Function to bind complete items with the delete task handler
let bindCompleteItems = function(taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector('.delete');
  deleteButton.onclick = deleteButtonClick;
}

// Bind existing incomplete items
for (let i = 0; i < todoUl.children.length; i++) {
  bindIncompleteItems(todoUl.children[i], completeTask);
}

// Bind existing complete items
for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

// Add event listener to the form for adding new tasks
form.addEventListener('submit', addTask);
