let tasks = []

function addTask() {
  let task = prompt("Enter task: ")
  tasks.push(task)
  displayTasks()
}

function displayTasks() {
  document.getElementById("taskList").innerHTML = ""

  for (let i = 0; i < tasks.length; i++) {
    document.getElementById("taskList").innerHTML +=
      `<li id="${i}"> ${tasks[i]} <button onclick="deleteTask(${i})"><i class="fas fa-trash"></i></button> </li>`
  }
}

function deleteTask(idTask) {
  document.getElementById(idTask).remove();
  tasks.splice(idTask, 1);
}