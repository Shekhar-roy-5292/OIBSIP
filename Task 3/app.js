// Select the form element and attach a submit event listener
let taskFormEl = document.querySelector('#task-form');
taskFormEl.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the task title and description input elements and their values
    let taskTitleInputEl = document.querySelector('#input-title');
    let taskDescriptionInputEl = document.querySelector('#input-item');
    let title = taskTitleInputEl.value.trim();
    let description = taskDescriptionInputEl.value.trim();

    // Check if both title and description are not empty before adding the task
    if (title && description) {
        // Retrieve the task list from localStorage or initialize an empty array
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

        // Create a task object with title and description
        let task = {
            title: title,
            description: description
        };

        // Add the new task object to the beginning of the task list
        taskList.unshift(task);

        // Save the updated task list back to localStorage
        localStorage.setItem('tasks', JSON.stringify(taskList));

        // Call the displayTask function to update the displayed tasks
        displayTask();

        // Clear the input fields
        taskTitleInputEl.value = '';
        taskDescriptionInputEl.value = '';
    }
});

// Display tasks stored in localStorage
let displayTask = () => {
    let taskListEl = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    if (taskList.length !== 0) {
        let eachTask = '';
        for (let task of taskList) {
            eachTask += `<div class="task-container">
            <div class="container taskHeader">
              <div class="taskTitle">${task.title}</div>
              <button class="task-cancel">X</button>
            </div>
            <div class="taskContent">${task.description}</div>
          </div>`
        }
        taskListEl.innerHTML = eachTask;
    }
};

// Call the displayTask function to initially display tasks
displayTask();

// Event listener for removing a task
let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click', function (event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('task-cancel')) {
        let actualEl = targetElement.parentElement.parentElement;
        console.log(actualEl);
        let selectedTaskTitle = actualEl.querySelector('.taskTitle').textContent;

        // Get tasks from localStorage
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

        // Filter out the selected task by its title and update the localStorage
        taskList = taskList.filter(function (task) {
            return task.title.trim() !== selectedTaskTitle.trim();
        });

        localStorage.setItem('tasks', JSON.stringify(taskList));

        // Call displayTask to update the displayed tasks
        displayTask();
    }
});
