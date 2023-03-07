// Access DOM
const button = document.querySelector("button");
const toDo = document.getElementById("todo");
const checklist = document.getElementById("checklist");
// checkbox dom element
const checkBox = document.querySelector("#checkbox");
// p tag dom element
const todoText = document.querySelector(".todo");
const task = document.querySelectorAll(".task")

function checked(){
    checkBox.click();
    todoText.classList.add("lineThrough")
}

function deleteTodo(){
    task[task.length -1].remove();
    return checklist.childElementCount
}

deleteTodo()




function submitToDo(text){
  const node = document.createElement("li");
  let textNode = document.createTextNode(text); // generate node using input value
  const checkbox = document.createElement("input"); 
  checkbox.type = "checkbox"; // create checkbox  
  node.appendChild(checkbox);
  node.appendChild(textNode); 
  checklist.appendChild(node); // add new task to the checklist
}

button.addEventListener("click", () => {
  submitToDo(`${toDo.value}`);
});


