let todos = [];
const containerTodos = document.getElementById("container-todos");
const newTodo = document.getElementById("text-box");
const addTodoBtn = document.getElementById("btn-addTodo");

function render() {
  containerTodos.innerHTML = "";
  let template = "";
  todos.forEach((todo, i) => {
    template += `
           <li>
              <input checked=${true} type="checkbox" name="" id="">
              <span>${todo.text}</span>
              <button onclick="deleteTodo(${todo.id})" >Delete</button>
              <button onclick="updateTodo(${todo})" >Update</button>
          </li>
        `;
  });

  containerTodos.innerHTML = template;
}


addTodoBtn.addEventListener("click", () => {
    if (newTodo.value.trim()) {
      todos.push({
        id: Date.now(),
        text: newTodo.value,
        iscompleted: true,
      });
  
      newTodo.value = "";
    }
    render();
  })



function deleteTodo(idTodelete) {
  console.log(idTodelete);

  todos = todos.filter((todo, i) => todo.id !== idTodelete);

  render();
}

function updateTodo(todoToUpdate) {
  console.log("OK");

  console.log(todoToUpdate);
}