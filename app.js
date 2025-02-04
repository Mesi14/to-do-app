const taskName = document.getElementById("task-name");
const taskDescript = document.getElementById("task-descript");
const addTask = document.getElementById("button-addon2");
const myTasks = document.getElementById("my-tasks");
const currTask = document.getElementById("task-list");

addTask.addEventListener("click", () => {
  const newTask = createTask(taskName.value, taskDescript.value);
  console.log(createTask(taskName.value, taskDescript.value));

  addTodo(newTask);
  console.log(todos);
})

const createElement = (itemType, itemClass, itemTxt = null) => {
  const item = document.createElement(itemType);
  item.className = itemClass;
  item.textContent = itemTxt;
  return item;
}

const createTask = (name, val) => {
  const liItem = createElement("li", "list-item d-flex flex-row");
  const taskDescript = createElement("div", "task-description");
  const chckbox = createElement("input", "is-done");
  chckbox.setAttribute = ("type", "checkbox");
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

let todos = [];
const addTodo = (currTask) => {
  todos.push(currTask)
  return todos;
}