// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {
    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    const list = document.querySelector("ul");
    const template = document.querySelector('#checklistrow');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll("li");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";

    list.appendChild(clone);

    // Clone the new row and insert it into the table
    const clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("li");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    ul.appendChild(clone2);

} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
}
