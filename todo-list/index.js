let todos = [];
let editMode = false;
let currentTodoId = null;

function addTodo() {
  const textbox = document.getElementById("text-box");
  const newTodo = textbox.value.trim();
  if (newTodo) {
    todos.push({
      id: Date.now(),
      text: newTodo,
      isCompleted: false,
    });

    textbox.value = "";
    render();
  }
}

function render() {
  const todoList = document.getElementById("todo-list");

  todoList.innerHTML = "";

  todos.forEach((todo, i) => {
    const todoItem = document.createElement("li");
    todoItem.setAttribute("data-key", i);

    // checkbox

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isCompleted;
    checkbox.addEventListener("change", () => markTodo(i));

    // create text todo
    const todoText = document.createElement("span");
    todoText.innerText = todo.text;
    if (todo.isCompleted) todoText.className = "completed";

    // create delete button
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.addEventListener("click", () => deleteTodo(todo.id));

    // create edit button
    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.addEventListener("click", () => editTodo(todo.id));

    todoItem.append(checkbox, todoText, deletebtn, editbtn);
    todoList.appendChild(todoItem);
  });
}

function deleteTodo(todoId) {

  todos = todos.filter((todo) => todo.id !== todoId)
  render()
  
  
  
  console.log("delete todo ...");
}

function editTodo() {

  const editMode = document.getElementById("edit-mode")
  editMode.style.display = "block"
  console.log("Edit todo ...");
}

function updateTodo() {
  console.log("update todo ...");
}

function markTodo(todoToMark) {
  const todo = todos[todoToMark];

  if (todo) todo.isCompleted = !todo.isCompleted;

  render();

  console.log("mark todo ...");
}
