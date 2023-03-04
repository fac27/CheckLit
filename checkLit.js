// Access DOM
const button = document.querySelector("button");
let toDo = document.getElementById("todo");
let checklist = document.getElementById("checklist");
        

function submitToDo(){
  const node = document.createElement("li");
  const textNode = document.createTextNode(toDo.value);
  console.log(textNode);
  node.appendChild(textNode);
  checklist.appendChild(node); // add new task to the checklist
}

button.addEventListener("click", submitToDo);


