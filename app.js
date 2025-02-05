const taskName = document.getElementById("task-name");
const taskDescript = document.getElementById("task-descript");
const addTask = document.getElementById("button-addon2");
const myTasks = document.getElementById("tasks");
const currTasks = document.getElementById("task-list");
let todos = [];

addTask.addEventListener("click", () => {
  const newTask = createTask(taskName.value, taskDescript.value);
  currTasks.appendChild(newTask);
  addTodo(newTask);
})

const createElement = (itemType, itemClass, itemTxt = null) => {
  const item = document.createElement(itemType);
  item.className = itemClass;
  item.textContent = itemTxt;
  return item;
}

const createTask = (name, val) => {
  const liItem = createElement("li", "list-item d-flex flex-row");
  liItem.setAttribute("id", `ele-${todos.length+1}`);
  const taskDescript = createElement("div", "task-description");
  const chckbox = createElement("input", "is-done");
  chckbox.setAttribute("type", "checkbox");
  const headerLiEle = createElement("h6", "header-ele");
  const paragraphEle = createElement("p", "paragraphEle");
  headerLiEle.innerHTML = name;
  paragraphEle.innerHTML = val;
  taskDescript.appendChild(chckbox);
  taskDescript.appendChild(headerLiEle);
  taskDescript.appendChild(paragraphEle);
  
  const iconDiv = createElement("div", "icon-div");
  const editIcon = createElement("i", "bi bi-pencil");
  const deleteIcon = createElement("i", "bi bi-trash");
  iconDiv.appendChild(editIcon);
  iconDiv.appendChild(deleteIcon);

  liItem.appendChild(taskDescript);
  liItem.appendChild(iconDiv);
  return liItem;
}

const toggleCheckedStatus = (btn) => {
  
  btn.checked() ? console.log('Is checked') : console.log("error")
}

const addTodo = (currTask) => {
  todos.push(currTask)
  return todos;
}