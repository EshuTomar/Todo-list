addButton = document.getElementById("add-btn");
todocontainer = document.getElementById("todo-container");
todoInput = document.getElementById("todo-input");

addButton.addEventListener("click", (e)=> {
  let todo = document.createElement("div");
  todo.classList.add("todo");

  let li = document.createElement("li");
  li.innerText = `${todoInput.value}`;
  todo.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("todo-check");
  todo.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
  deleteButton.classList.add("todo-delete");
  todo.appendChild(deleteButton);

  if(todoInput.value === ""){
    alert("Please enter a task");
  }else{
    todocontainer.appendChild(todo);
  }

  todoInput.value = "";
 
});


todocontainer.addEventListener("click", (e) => {
  let element = e.target;
  if (element.classList.contains("todo-check")) {
    let todoItem = element.parentElement;
    todoItem.classList.toggle("completed");

    // Apply styles when the task is completed (checked)
    if (todoItem.classList.contains("completed")) {
      todoItem.style.width = "400px";
      let liElement = todoItem.querySelector("li");
      liElement.style.textDecoration = "line-through";
      liElement.style.backgroundColor = "lightgrey";
      liElement.style.borderRadius = "5px";
      
    } else {
      todoItem.style.width = "auto"; 
      let liElement = todoItem.querySelector("li");
      liElement.style.textDecoration = "none";
    }
  }

  if (element.classList.contains("todo-delete")) {
    element.parentElement.remove();
  }
});
