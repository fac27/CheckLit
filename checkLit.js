// Access DOM

const button = document.querySelector("#addNew");
const checklist = document.querySelector("ul");
const userInput = document.querySelector("#todo");
const deleteButton = document.querySelector("#deleteButton");
const domCheckbox = document.createElement("input");
domCheckbox.type = "checkbox";
const listFormBtn = document.querySelector("#list");
const submitList = document.querySelector("#newList");
const newListform = document.querySelector(".newListForm");
const listContainer = document.querySelector(".listContainer");
const task = document.querySelector(".task");
const todos = document.querySelectorAll(".Todos");

function submitToDo(text, ul) {
  if ("content" in document.createElement("template")) { // test to see if the browser supports the HTML template element by checking for the presence of the template element's content attribute.
    const checklistRow = document.querySelector("#checklistrow"); 
    const clone = checklistRow.content.cloneNode(true); // access the <template> element and clone to create a new row
    let li = clone.querySelectorAll("span"); // access <span> elements within <li> of the new row
    // create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; 
    li[0].appendChild(checkbox); // append the checkbox to the first <span> element wrapped in <li>
    li[1].textContent = text; // sets the textContent property of the second <span> element to the value of the text parameter

    if (ul) {
      ul.appendChild(clone);
    } else 
      checklist.appendChild(clone);
    

    // checklist.appendChild(clone);
  } else {
    // Find another way to add the rows to the table because  the HTML template element is not supported
  }
}

// call submitToDo()
button.addEventListener("click", () => {
  const errorMess = document.createElement("p");
  if (userInput.value !== "") { // check input value is not empty
    submitToDo(`${userInput.value}`);
    userInput.value = "";
  } else {
    errorMess.innerText = "Cannot add empty item";
    checklist.appendChild(errorMess);
    setTimeout(() => checklist.removeChild(errorMess), 1000);
  }
});

function newList() {
  const ogCard = document.querySelector("#card");
  const cloneCard = ogCard.cloneNode(true);

// set new list background color
  const colorArr = ["#70e4ef", "#E2EF70", "#EF709D", "#F038FF", "#3772FF"]
  const randomIndex = Math.floor(Math.random() * colorArr.length);
  cloneCard.style.backgroundColor = colorArr[randomIndex];

// prevent ul items from copying onto new list card
  const inputClone = cloneCard.querySelector("input");  
  const btnClone = cloneCard.querySelector("#addNew");
  const ulClone = cloneCard.querySelector("ul");
  ulClone.innerHTML = "";
  btnClone.addEventListener("click", () => {
    submitToDo(inputClone.value, ulClone);
    inputClone.value = "";
  });

// call closeList() - this can only be called on cloned cards as deleting the original prevents future cloning
  const closeBtnClone = cloneCard.querySelector('#close-list');    
  closeBtnClone.addEventListener("click", () => closeList(cloneCard));

// enable submitToDo() on newList card
  btnClone.addEventListener("click", () => {
    if (inputClone.value !== "") {
      submitToDo(inputClone.value, ulClone);
    } else {
      const errorMess = document.createElement("p");
      errorMess.innerText = "Cannot add empty item";
      ulClone.appendChild(errorMess);
      setTimeout(() => ulClone.removeChild(errorMess), 1000);
    }
  });

// enable deleteEntry() on newList card
  const deleteBtnClone = cloneCard.querySelector("#deleteButton");
  deleteBtnClone.addEventListener("click", () => deleteEntry());

// create new list
const newHeading = document.querySelector("#ListName");
const listHeading = cloneCard.querySelector("#list-heading");

  if (newHeading.value !== "") { 
    listHeading.innerText = newHeading.value;
    newHeading.value = "";
    newHeading.setAttribute("placeholder", `"Shopping List"`);
    listContainer.appendChild(cloneCard); // append newList card to listContainer div
    newListform.classList.add("displayNone"); // remove form 
  } else { // show error message 
    const errorMess = document.createElement("p");
    errorMess.innerText = "List heading cannot be empty";
    newListform.appendChild(errorMess);
    setTimeout(() => newListform.removeChild(errorMess), 1000);
  }
}

// END newList()

// 
listFormBtn.addEventListener("click", function () {
  newListform.classList.remove("displayNone");
});

// call newList() 
submitList.addEventListener("click", function () {
  newList();
});

// checked() for test
function checked() {
  domCheckbox.click();
}

// for all ticked items when delete btn clicked, remove item
function deleteEntry() {
  const checkboxAll = document.querySelectorAll('[type*="checkbox"]');
  checkboxAll.forEach((checkbox) => {
    if (checkbox.checked == true) {
      const listItem = checkbox.parentNode.parentNode;
      listItem.remove();
    }
  });
}

// call deleteEntry()
deleteButton.addEventListener("click", () => {
  deleteEntry();
});

// remove entire list card
function closeList(card) {
  card.remove();
}
