const todoInput = document.querySelector(".todo-input");
const addTodoButton = document.querySelector(".add-todo-button");
const todoList = document.querySelector(".todo-list");

function createTodoElement(todoText) {
  const todo = document.createElement("li");
  todo.classList.add("todo-item");
  todo.innerText = todoText;
  return todo;
}

addTodoButton.addEventListener("click", function () {
  const todoText = todoInput.value;
  const todo = createTodoElement(todoText);
  const todoList = document.querySelector(".todo-list");
  todoList.appendChild(todo);
  todoInput.value = "";
});
