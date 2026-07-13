// ---------- Grab elements from the page ----------
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const emptyWarning = document.getElementById("empty-warning");

const totalCountDisplay = document.getElementById("total-count");
const completedCountDisplay = document.getElementById("completed-count");
const pendingCountDisplay = document.getElementById("pending-count");

// ---------- App state ----------
// "tasks" is an array of task objects, each shaped like:
// { id: 12345, text: "Buy milk", completed: false }
let tasks = [];

// ---------- Load tasks from Local Storage ----------
// Local Storage only stores text, so we saved our array as a JSON string.
// Here we read that string back and turn it into a real array again.
function loadTasks() {
  const savedTasks = localStorage.getItem("todoTasks");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  } else {
    tasks = [];
  }

  displayTasks();
}

// ---------- Save tasks to Local Storage ----------
// JSON.stringify turns our array of objects into a text string,
// which is the only format Local Storage can store.
function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// ---------- Add a new task ----------
function addTask() {
  const taskText = taskInput.value.trim();

  // Show a warning if the input is empty and stop here
  if (taskText === "") {
    emptyWarning.textContent = "Please type a task before adding it.";
    return;
  }

  // Clear any previous warning message
  emptyWarning.textContent = "";

  // Create a new task object.
  // Date.now() gives a unique number we can use as an id.
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = "";

  saveTasks();
  displayTasks();
}

// ---------- Display all tasks on the screen ----------
function displayTasks() {
  // Clear the current list before redrawing it
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    // Create the <li> row for this task
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Checkbox for marking complete/incomplete
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleComplete(task.id));

    // Task text
    const taskText = document.createElement("span");
    taskText.className = "task-text" + (task.completed ? " completed" : "");
    taskText.textContent = task.text;

    // Edit button
    const editButton = document.createElement("button");
    editButton.className = "task-btn edit-btn";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(task.id));

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "task-btn delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    // Put the row together and add it to the list
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });

  updateTaskCount();
}

// ---------- Toggle a task's completed state ----------
function toggleComplete(taskId) {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  saveTasks();
  displayTasks();
}

// ---------- Edit an existing task ----------
function editTask(taskId) {
  const taskToEdit = tasks.find((task) => task.id === taskId);
  if (!taskToEdit) return;

  // A simple prompt box lets the user type a new version of the task
  const updatedText = prompt("Edit your task:", taskToEdit.text);

  // If the user cancels the prompt, updatedText will be null, so we stop
  if (updatedText === null) return;

  const trimmedText = updatedText.trim();
  if (trimmedText === "") {
    emptyWarning.textContent = "A task cannot be empty.";
    return;
  }

  taskToEdit.text = trimmedText;
  saveTasks();
  displayTasks();
}

// ---------- Delete a task ----------
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasks();
  displayTasks();
}

// ---------- Update the total / completed / pending counts ----------
function updateTaskCount() {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  totalCountDisplay.textContent = `Total: ${totalTasks}`;
  completedCountDisplay.textContent = `Completed: ${completedTasks}`;
  pendingCountDisplay.textContent = `Pending: ${pendingTasks}`;
}

// ---------- Event listeners ----------
addTaskButton.addEventListener("click", addTask);

// Let the user press Enter in the input box instead of clicking the button
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Clear the warning message as soon as the user starts typing again
taskInput.addEventListener("input", () => {
  emptyWarning.textContent = "";
});

// ---------- Load saved tasks when the page opens ----------
loadTasks();
