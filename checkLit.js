// Access DOM
const button = document.querySelector("button");

const checklist = document.querySelector("ul");

const userInput = document.querySelector("#todo");
  


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

button.addEventListener("click", () => {
  submitToDo(`${userInput.value}`)
});



