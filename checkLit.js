const button = document.querySelector("button");

button.addEventListener("click", () => {
    // Test to see if the browser supports the HTML template element by checking for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {
    // Instantiate the list with the existing HTML tbody and the row with the template
    const list = document.querySelector("ul");
    const template = document.querySelector('#checklistrow');

    // Access user 'To Do' input value
    const userInput = document.querySelector("input");

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    let li = clone.querySelectorAll("span");
    // newCheckbox()
    li[1].textContent = userInput.value;

    list.appendChild(clone);

} else {
  // Find another way to add the rows to the table because  the HTML template element is not supported.
}

})


