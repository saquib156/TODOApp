
// DOM Manipulation

const inputVal = document.querySelector(".todo-input");
const saveBtn = document.querySelector(".add-button");
const todoItems = document.querySelector(".todo-list");
const errorElem = document.querySelector(".error");

let todoList = [];

//fetch items from localStoage
function getTodoItems(){
  let Items = localStorage.getItem("data");
  let todoList = JSON.parse(Items);
  return todoList;
}

//create listing of localStoage items
function getTodoList(){
  let todoList = getTodoItems();
  
  const allItems = todoList.map( (data) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', data.id);
    li.innerHTML = `
        <button class="delete-button">Delete</button>
        ${data.name}
    `;
    todoItems.append(li);

    /*let itemName = `<li class="item" data-key="${data.id}"><button class="delete-button">Delete</button>${data.name}</li>`;
    todoItems.append(itemName);*/
  }); 
  
  return allItems;
}

getTodoList();

// add/set item to localStorage
saveBtn.addEventListener("click", function(){
  let item = inputVal.value;
  
  if(item != ''){
    let todoList = getTodoItems();

    const todoItem = {
      id: Date.now(),
      name: item
    };

    todoList.push(todoItem);

    localStorage.setItem("data", JSON.stringify(todoList));

    todoItems.innerHTML = '';
    inputVal.value = '';
    getTodoList();
  } else {
    errorElem.innerHTML = "Please enter item name";
  }
});

//Remove error after press button
inputVal.addEventListener("keypress", function(){
  errorElem.innerHTML = '';
  console.log("press");
});