function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let newTask = document.createElement("li");
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);

        alert("Task added successfully!");
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}