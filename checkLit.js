// Access DOM

const button = document.querySelector("#addNew");


const checklist = document.querySelector("ul");

const userInput = document.querySelector("#todo");


const deleteButton = document.querySelector("#deleteButton");

const domCheckbox = document.createElement("input");
domCheckbox.type = "checkbox";

const listFormBtn = document.querySelector("#list");

const submitList = document.querySelector("#newList")

const newListform = document.querySelector(".newListForm");

const listContainer = document.querySelector(".listContainer");
  




const task = document.querySelector(".task")
const todos = document.querySelectorAll(".Todos")

function submitToDo(text) {

// Test to see if the browser supports the HTML template element by checking for the presence of the template element's content attribute.
  if ('content' in document.createElement('template')) {

  // Append the template with the existing HTML <ul> checklist and the row with the template
    const checklistRow = document.querySelector('#checklistrow');

    // Clone the new row and insert it into the <ul>
    const clone = checklistRow.content.cloneNode(true); // accesses the content of the <template> element and clones to create a new row
    let li = clone.querySelectorAll("span"); // accesses the two <span> elements within the new row
    
    // Create checkbox
    const checkbox = document.createElement("input"); 
    checkbox.type = "checkbox"; // create checkbox
    li[0].appendChild(checkbox); // append the checkbox to the first <span> element wrapped in <li>
    li[1].textContent = text; // sets the textContent property of the second <span> element to the value of the text parameter.

    checklist.appendChild(clone);

} else {
  // Find another way to add the rows to the table because  the HTML template element is not supported.
}

}

function newList(){
const card = document.createElement("div");
let classesToAdd = [ "card", "m-right", "stack-m"];
card.classList.add(...classesToAdd)
listContainer.appendChild(card);

}

listFormBtn.addEventListener("click", function(){
    newListform.classList.remove("displayNone")
})


submitList.addEventListener("click", function(){
    newList();
    newListform.classList.add("displayNone")
})

function checked(){
    domCheckbox.click();
}


function removeTodo(){
    todos[todos.length -1].remove();
    }

button.addEventListener("click", () => {
  submitToDo(`${userInput.value}`);
});

function deleteEntry(){
  const checkboxAll = document.querySelectorAll('[type*="checkbox"]');
  checkboxAll.forEach(checkbox => {
    if (checkbox.checked == true){
      const listItem = checkbox.parentNode.parentNode;
      listItem.remove();
    }
  })
}

deleteButton.addEventListener("click", () => {
  deleteEntry();
})





