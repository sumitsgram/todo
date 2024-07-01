// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Check if there are tasks in localStorage and display them
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  // Clear the existing list
  taskList.innerHTML = "";

  // Render the tasks
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.style.position = "relative"; // Ensure positioning is relative for the delete button

    // Create task text
    const taskText = document.createElement("span");
    taskText.textContent = task;
    li.appendChild(taskText);

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(index);
    deleteButton.style.position = "absolute";
    deleteButton.style.right = "10px"; // Align to the right
    deleteButton.style.top = "50%"; // Align to the middle vertically
    deleteButton.style.transform = "translateY(-50%)"; // Adjust position to middle
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });

  // Save tasks to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task to the list and update localStorage
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";
    renderTasks();
  }
}

// Delete task from the list and update localStorage
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial rendering
renderTasks();
