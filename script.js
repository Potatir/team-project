document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
  
    
    // Добавление задачи
    addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">X</button>
      `;
  
      taskList.appendChild(taskItem);
      taskInput.value = "";
  
      // Отметка выполнения
      taskItem.querySelector("span").addEventListener("click", () => {
        taskItem.querySelector("span").classList.toggle("completed");
      });
  
      // Удаление задачи
      taskItem.querySelector(".delete").addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
    });
  });
  