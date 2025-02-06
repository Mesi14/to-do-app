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
  let currIdx = todos.length+1;
  liItem.setAttribute("id", currIdx);
  const taskDescript = createElement("div", "task-description");
  const chckbox = createElement("input", "is-done");
  chckbox.setAttribute("type", "checkbox");
  const headerLiEle = createElement("h6", "header-ele");
  headerLiEle.setAttribute("id", `title-${currIdx}`)
  headerLiEle.setAttribute("contenteditable",  false);
  const paragraphEle = createElement("p", "paragraphEle");
  paragraphEle.setAttribute("id", `descript-${currIdx}`)
  headerLiEle.innerHTML = name;
  paragraphEle.innerHTML = val;
  taskDescript.appendChild(chckbox);
  taskDescript.appendChild(headerLiEle);
  taskDescript.appendChild(paragraphEle);
  
  const iconDiv = createElement("div", "icon-div");
  const editIcon = createElement("i", "bi bi-pencil");
  
  editIcon.addEventListener('click', e => {
    const taskTitle = document.getElementById(`title-${currIdx}`);
    const taskDescript = document.getElementById(`descript-${currIdx}`)
    taskTitle.setAttribute("contenteditable", true);
    taskTitle.style.padding = '10px';
    taskDescript.setAttribute("contenteditable", true);
    taskDescript.style.padding = '10px';
    if(e.target.classList.contains('bi-pencil')) {
      e.target.classList.remove('bi-pencil');
      e.target.classList.add('bi-save');
      e.target.addEventListener('click', ()=>{
        taskTitle.setAttribute("contenteditable", false);
        taskDescript.setAttribute("contentEditable", false);
        taskTitle.style.padding = '0';
        taskDescript.style.padding = '0';
      })
    } else {
      e.target.classList.remove('bi-save');
      e.target.classList.add('bi-pencil');
      e.target.addEventListener('click', ()=>{
        taskTitle.setAttribute("contenteditable", true);
        taskDescript.setAttribute("contentEditable", true);
      })
    }
  });

  const deleteIcon = createElement("i", "bi bi-trash");
  deleteIcon.addEventListener('click', e => {
    e.target.parentNode.parentNode.remove();
  });
  iconDiv.appendChild(editIcon);
  iconDiv.appendChild(deleteIcon);

  liItem.appendChild(taskDescript);
  liItem.appendChild(iconDiv);
  return liItem;
}

const addTodo = (currTask) => {
  todos.push(currTask)
  return todos;
}
