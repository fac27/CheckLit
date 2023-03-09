function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}


function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}



// Test 1: Add tasks to a list so that I can keep track of them

// RED: a failing test
// test("Submitting a new task adds it to the list", () => {
//   equal(submitToDo(), "Add new task to the list")
// });

// function submitToDo(){}

// GREEN: make the test pass (simplest level)

// function submitToDo(){
//     return "Add new task to the list";
// }


// GREEN: make the test pass



/* See submitToDo in checkLit.js */

  

  test("Submitting a new task adds it to the list", () => {
    submitToDo("test input") // call function, replicating user button "click"

    const listItem = document.querySelector("#checklist li:last-child"); // access the output of the test submitToDo("test input")
    const textInput = listItem.querySelector("span:last-child").textContent;


    equal(checklist.children.length, 2); // checks the <ul> length to see if new <li> has been added (submitToDo adds a new <li> to the list so there should now be 2 in total (1 - apples, 2 - test input)
    equal(checklist.children[1].tagName, "LI"); // checks for new <li> element
    equal(textInput, "test input"); // checks second <span> text value wrapped in the the <li>

    
    listItem.remove() // remove the test output from the DOM

  });

  test("Deleting an entry removes it from the list", () => {
    submitToDo("test input");
    
    const listItem = document.querySelector("#checklist li:last-child"); // access the checkbox output of the test submitToDo("test input")
    const testCheckbox = listItem.querySelector('[type*="checkbox"]');
    testCheckbox.checked = true;

    deleteEntry();

    equal(checklist.children.length, 1) // checks the "test input" li item was removed and the checklist length returns to 1    

  });


  test("Test to see if checkbox works when checked", () => {
    checked();
    equal(domCheckbox.checked,true);
  })



