// Function to get and validate task status
function getValidStatus(taskNumber) {
    let status = prompt(`Enter status for Task ${taskNumber} (todo, doing, or done):`).toLowerCase();
    // Validate status input to ensure it matches allowed values
    while (status !== "todo" && status !== "doing" && status !== "done") {
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        status = prompt(`Enter status for Task ${taskNumber} (todo, doing, or done):`).toLowerCase();
    }
    return status;
}

// Collect details for Task 1
let task1Title = prompt("Enter title for Task 1:");
let task1Description = prompt("Enter description for Task 1:");
let task1Status = getValidStatus(1);

// Collect details for Task 2
let task2Title = prompt("Enter title for Task 2:");
let task2Description = prompt("Enter description for Task 2:");
let task2Status = getValidStatus(2);

// Store tasks in an array for easier handling
let tasks = [
    { title: task1Title, description: task1Description, status: task1Status },
    { title: task2Title, description: task2Description, status: task2Status }
];

// Display completed tasks or motivational message
let completedTasks = tasks.filter(task => task.status === "done");
if (completedTasks.length > 0) {
    // Log each completed task's title and status
    completedTasks.forEach(task => console.log(`Title: ${task.title}, Status: ${task.status}`));
} else {
    console.log("No tasks completed, let's get to work!");
}