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
const todos = document.querySelectorAll(".Todos");
const card = document.getElementById("card");

function submitToDo(text, ul) {
  if ("content" in document.createElement("template")) {
    // test to see if the browser supports the HTML template element by checking for the presence of the template element's content attribute.
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
    } else checklist.appendChild(clone);
  } else {
    // Find another way to add the rows to the table because  the HTML template element is not supported
  }
}

function errorMessage(relevantCard, text) {
  const errorMess = document.createElement("p");
  errorMess.classList.add("remove-default");
  // text = "Cannot add empty item";
  errorMess.innerText = text;
  relevantCard.appendChild(errorMess);
}

function removeErrorMessage(relevantCard) {
  const errorMess = relevantCard.querySelector("p");
  setTimeout(() => relevantCard.removeChild(errorMess), 1000);
}

// Generate random background color for new list card
function randomColor(clone) {
  const colorArr = ["#70e4ef", "#E2EF70", "#EF709D", "#F038FF", "#3772FF"];
  const randomIndex = Math.floor(Math.random() * colorArr.length);
  clone.style.backgroundColor = colorArr[randomIndex];
}

function newList() {
  const cloneCard = card.cloneNode(true);
  cloneCard.classList.remove('displayNone');
  randomColor(cloneCard);

  // Empty cloned list of previous li elements
  const ulClone = cloneCard.querySelector("ul");
  ulClone.innerHTML = "";

  // Call closeList() - this can only be called on cloned cards as deleting the original prevents future cloning
  const closeBtnClone = cloneCard.querySelector("#close-list");
  closeBtnClone.addEventListener("click", () => closeList(cloneCard));

  // Add submitToDo() event listener to new list card
  const btnClone = cloneCard.querySelector("#addNew");
  btnClone.addEventListener("click", () => {
    const inputClone = cloneCard.querySelector("input");
    if (inputClone.value !== "") {
      submitToDo(inputClone.value, ulClone);
      inputClone.value = "";
    } else {
      errorMessage(cloneCard, "Cannot add empty item");
      removeErrorMessage(cloneCard);
    }
  });

  deleteEntryClone(cloneCard);

  // Create new list
  const newHeading = document.querySelector("#ListName");
  const listHeading = cloneCard.querySelector("#list-heading");

  if (newHeading.value !== "") {
    listHeading.innerText = newHeading.value;
    newHeading.value = "";
    listContainer.appendChild(cloneCard);
    newListform.classList.add("displayNone"); // remove form
  } else {
    errorMessage(newListform, "List heading cannot be empty");
    removeErrorMessage(newListform);
  }
}
// END newList()

function checked() {
  domCheckbox.click();
}

// For all ticked items when delete btn clicked, remove item
function deleteEntry() {
  const checkboxAll = document.querySelectorAll('[type*="checkbox"]');
  checkboxAll.forEach((checkbox) => {
    if (checkbox.checked == true) {
      const listItem = checkbox.parentNode.parentNode;
      listItem.remove();
    }
  });
}

function deleteEntryClone(relevantCard) {
  const deleteBtnClone = relevantCard.querySelector("#deleteButton");
  deleteBtnClone.addEventListener("click", () => deleteEntry());
}

// Remove entire list card
function closeList(relevantCard) {
  relevantCard.remove();
}

// Event Listeners

// Call submitToDo()
button.addEventListener("click", () => {
  if (userInput.value !== "") {
    submitToDo(`${userInput.value}`);
    userInput.value = "";
  } else {
    errorMessage(card, "Cannot add empty item");
    removeErrorMessage(card);
  }
});

// call newList()
submitList.addEventListener("click", newList);

// call deleteEntry()
deleteButton.addEventListener("click", deleteEntry);

// Remove form from view
listFormBtn.addEventListener("click", function () {
  newListform.classList.remove("displayNone");
});
