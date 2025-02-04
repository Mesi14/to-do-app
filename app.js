const taskName = document.getElementById("task-name");
const taskDescript = document.getElementById("task-descript");
const addTask = document.getElementById("button-addon2");
const myTasks = document.getElementById("my-tasks");

console.log(taskName, taskDescript, addTask);
addTask.addEventListener("click", () => {
  createTask();
  console.log(createTask);
})

const createElement = (itemType, itemClass, itemTxt = null) => {
  const item = document.createElement(itemType);
  item.className = itemClass;
  item.textContent = itemTxt;
  return item;
}

let todos = [];
const addTodo = () => {
  todos.push({taskName: taskDescript})
  console.log(todos);
}