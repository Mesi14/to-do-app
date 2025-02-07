const taskName = document.getElementById("task-name");
const taskDescript = document.getElementById("task-descript");
const addTask = document.getElementById("button-addon2");
const myTasks = document.getElementById("tasks");
const currTasks = document.getElementById("task-list");
const todos = [];

addTask.addEventListener("click", () => {
  if(taskName.value === "") {
    alert("Title can't be blank!")
  } else {
    const newTask = createTask(taskName.value, taskDescript.value);
    currTasks.appendChild(newTask);
    addTodo(newTask);
    taskName.value = "";
    taskDescript.value = "";
  }
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
  liItem.id = currIdx;
  const taskDescript = createElement("div", "task-description");
  const chckbox = createElement("input", "is-done");
  chckbox.type = "checkbox";
  const headerLiEle = createElement("h6", "header-ele");
  headerLiEle.id = `title-${currIdx}`;
  headerLiEle.contenteditable = false;
  const paragraphEle = createElement("p", "paragraphEle");
  paragraphEle.setAttribute("id", `descript-${currIdx}`)
  headerLiEle.innerHTML = name;
  paragraphEle.innerHTML = val;
  taskDescript.appendChild(chckbox);
  taskDescript.appendChild(headerLiEle);
  taskDescript.appendChild(paragraphEle);
  const iconDiv = createElement("div", "icon-div d-flex");
  const editBtn = createEditIcon(currIdx);
  const deleteBtn = createDeleteIcon();
  iconDiv.appendChild(editBtn);
  iconDiv.appendChild(deleteBtn);
  liItem.appendChild(taskDescript);
  liItem.appendChild(iconDiv);
  return liItem;
}

const createEditIcon = (currIdx) => {
  const editIcon = createElement("i", "bi bi-pencil");
  editIcon.addEventListener('click', e => {
    const taskTitle = document.getElementById(`title-${currIdx}`);
    const taskDescript = document.getElementById(`descript-${currIdx}`)
    taskTitle.contenteditable = true;
    taskTitle.style.padding = '0.2rem 1rem';

    taskDescript.contenteditable = true;
    taskDescript.style.padding = '0.2rem 1rem';
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
        taskTitle.style.padding = '0.2rem 1rem';
        taskDescript.style.padding = '0.2rem 1rem';
      })
    }
  });
  return editIcon;
}

const createDeleteIcon = () => {
  const deleteIcon = createElement("i", "bi bi-trash");
  deleteIcon.addEventListener('click', e => {
    e.target.parentNode.parentNode.remove();
  });
  return deleteIcon;
}


const addTodo = (currTask) => {
  todos.push(currTask)
  return todos;
}
