You are an expert Frontend Developer and JavaScript instructor.

Create a beginner-friendly To-Do List web application using only HTML, CSS, and JavaScript.

## Project Requirements

- This project is for beginners learning web development.
- Keep the code simple, clean, well-organized, and easy to understand.
- Do NOT use any frameworks or external libraries.
- Separate the project into these files:

1. index.html
2. style.css
3. script.js

The project must run by simply opening index.html in any modern browser.

----------------------------------------
PROJECT FEATURES
----------------------------------------

Implement the following features:

1. Add a new task.
2. Display all tasks.
3. Edit a task.
4. Delete a task.
5. Mark tasks as completed using a checkbox.
6. Save tasks using Local Storage.
7. Automatically load saved tasks when the page refreshes.
8. Show an error message if the input is empty.
9. Display:
   - Total Tasks
   - Completed Tasks
   - Pending Tasks
10. Clear the input after adding a task.

----------------------------------------
TASK OBJECT FORMAT
----------------------------------------

Store tasks as an array of objects.

Each object should look like:

{
    id: 1,
    text: "Learn JavaScript",
    completed: false
}

----------------------------------------
HTML REQUIREMENTS
----------------------------------------

Create a clean structure containing:

- Main container
- Title
- Input box
- Add Task button
- Error message area
- Task statistics
- Task list

Each task should contain:

☐ Checkbox

Task text

Edit button

Delete button

----------------------------------------
CSS REQUIREMENTS
----------------------------------------

Create a modern beginner-friendly UI.

Requirements:

- Center the app
- White card
- Rounded corners
- Soft shadow
- Responsive design
- Flexbox layout
- Hover effects
- Nice spacing
- Mobile friendly
- Simple colors
- Smooth button hover transitions

----------------------------------------
JAVASCRIPT REQUIREMENTS
----------------------------------------

Write beginner-friendly JavaScript.

Do NOT use advanced concepts.

Use descriptive variable names.

Organize the code into these functions:

loadTasks()

saveTasks()

displayTasks()

addTask()

editTask()

deleteTask()

toggleComplete()

updateTaskCount()

showError()

clearError()

Use:

- Event Listeners
- Local Storage
- Array methods
- DOM Manipulation

Do NOT use inline onclick attributes.

----------------------------------------
LOCAL STORAGE
----------------------------------------

Use localStorage.

Save tasks as JSON.

Automatically load saved tasks when the page opens.

----------------------------------------
COMMENTS
----------------------------------------

Add comments explaining every important section.

Explain:

- Variables
- Functions
- Loops
- Event listeners
- Local Storage
- DOM manipulation

----------------------------------------
EXPLANATION SECTION
----------------------------------------

Before each file explain:

What the file does.

Then show the complete code.

Files:

1. index.html

2. style.css

3. script.js

----------------------------------------
AFTER THE CODE
----------------------------------------

Explain:

1. How the application works

2. How Local Storage works

3. How each JavaScript function works

4. Beginner mistakes to avoid

5. Folder structure

----------------------------------------
NEXT IMPROVEMENTS
----------------------------------------

Finally suggest and briefly explain these improvements:

1. Search Tasks

2. Filter Tasks

3. Due Date

4. Task Priority

5. Categories

6. Dark Mode

7. Drag and Drop Sorting

8. Task Reminders

9. Clear Completed Tasks

10. Export and Import Tasks

----------------------------------------
CODE QUALITY
----------------------------------------

- Use semantic HTML.
- Use CSS variables where appropriate.
- Keep CSS organized.
- Keep JavaScript modular.
- Avoid duplicate code.
- Make the project beginner-friendly.
- Ensure there are no syntax errors.
- Ensure everything works correctly.
- The project must be fully functional by simply opening index.html.
