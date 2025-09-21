// STEP 1: Get the HTML elements we need to work with
const taskInput = document.getElementById("taskInput");     // The text box where users type
const addTaskBtn = document.getElementById("addTaskBtn");   // The "Add Task" button
const taskList = document.getElementById("taskList");       // The <ul> where tasks will appear

// STEP 2: Create the main function that adds a new task
function addTask() {
  // Get the text from the input box and remove extra spaces
  const taskText = taskInput.value.trim();
  
  // If the input is empty, don't add anything
  if (taskText === "") {
    return; // Exit the function early
  }
  
  // Create the task item (this will be our <li> element)
  createTaskItem(taskText);
  
  // Clear the input box for the next task
  taskInput.value = "";
}

// STEP 3: Create a separate function to build each task item
function createTaskItem(taskText) {
  // Create a new list item (<li>)
  const listItem = document.createElement("li");
  
  // Create the text part of the task
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  
  // Create the delete button
  const deleteButton = createDeleteButton(listItem);
  
  // Put the text and button inside the list item
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  
  // Add the completed list item to our task list
  taskList.appendChild(listItem);
}

// STEP 4: Create a separate function for the delete button
function createDeleteButton(listItem) {
  // Create the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  
  // Add click event to delete the task
  deleteBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents other click events from firing
    listItem.remove();       // Remove this task from the list
  });
  
  return deleteBtn;
}

// STEP 5: Set up event listeners (these "listen" for user actions)

// Listen for clicks on the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Listen for Enter key presses in the input box
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask(); // Same as clicking the button
  }
});

/*
WHAT THIS CODE DOES:
1. When user types a task and clicks "Add Task" OR presses Enter
2. We create a new list item with the task text and a delete button
3. We add it to the task list on the page
4. If user clicks "Delete" on any task, that task gets removed

KEY CONCEPTS FOR STUDENTS:
- DOM manipulation: Creating and modifying HTML elements with JavaScript
- Event listeners: Making the page respond to user actions (clicks, key presses)
- Functions: Breaking code into smaller, reusable pieces
- Variables: Storing references to HTML elements and user input
*/