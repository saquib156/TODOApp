// DOM Manipulation

const todoFrm = document.querySelector(".todo-form");
const inputVal = document.querySelector(".todo-input");
const saveBtn = document.querySelector(".add-button");

let todoList = [];

function getTodoItems(){
  let Items = localStorage.getItem("data");
  let todoList = JSON.parse(Items);
  return todoList;
}

// set item to localStorage
saveBtn.addEventListener("click", function(event){
  let item = inputVal.value;
  
  let todoList = getTodoItems();

  const todoItem = {
    id: Date.now(),
    name: item
  };

  todoList.push(todoItem);

  localStorage.setItem("data", JSON.stringify(todoList));
});