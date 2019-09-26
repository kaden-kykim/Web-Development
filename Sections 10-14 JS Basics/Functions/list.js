var todos = ["Hello", "Goodbye"];
var answer = null;

while (answer != "quit") {
  answer = prompt("What would like to do?");
  if (answer === "new") {
    addTodo();
  } else if (answer === "list") {
    listTodos();
  } else if (answer == "delete") {
    deleteTodo();
  }
}

function addTodo() {
  todos.push(prompt("Enter new todo"));
  console.log(todos[todos.length - 1] + " added to list");
}

function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, index) {
    console.log(index + ": " + todo);
  });
  console.log("**********");
}

function deleteTodo() {
  var index = Number(prompt("Enter index of todo to delete"));
  if (typeof(index) === "number") {
    if (index >= 0 && index < todos.length) {
      todos.splice(index, 1);
      console.log("Todo Removed - index: " + index);
    }
  }
}

console.log("Quit the app.");