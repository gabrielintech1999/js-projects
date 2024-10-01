const containerTodos = document.getElementById("container-todos");
const textBox = document.getElementById("text-box");
const addTodoBtn = document.getElementById("btn-addTodo");

// state
let todos = [];
let newTodo;
//let iscompleted = true

function render() {
  containerTodos.innerHTML = "";
  let template = "";
  todos.forEach((todo, i) => {
    template += `
           <li data-key=${i} >
              <input type="checkbox" id="checkbox" name="checkbox" onclick=markTodo(${i})  >
              <span class=${todo.iscompleted ? "completed" : null} >${
      todo.text
    }</span>
              <button onclick="deleteTodo(${todo.id})" >Delete</button>
              <button onclick="updateTodo(${i})" >Update</button>
          </li>
        `;
  });

  containerTodos.innerHTML = template;
}

const markTodo = (idToMark) => {

    todos[idToMark].iscompleted = !todos[idToMark].iscompleted 

    render()
  
};

function addTodo() {
  newTodo = textBox.value.trim();
  if (newTodo) {
    todos.push({
      id: Date.now(),
      text: newTodo,
      iscompleted: false,
    });

    textBox.value = "";
  }
  render();
}

function deleteTodo(idTodelete) {
  console.log(idTodelete);

  todos = todos.filter((todo, i) => todo.id !== idTodelete);

  render();
}

function updateTodo(indexToUpdate) {
  console.log("OK");

  console.log(todos[indexToUpdate]);
}
