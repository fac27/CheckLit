// Access DOM
const button = document.querySelector("button");
const toDo = document.getElementById("todo");
const checklist = document.getElementById("checklist");

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


