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

test("Submitting a new task adds it to the list", () => {
  submitToDo("test input") // call function
  equal(checklist.children.length, 2); // checks the <ul> length to see if new <ul> has been added (given there was already 1 on the page this is now 2)
  equal(checklist.children[1].tagName, "LI"); // checks for new <li> element
  equal(checklist.children[1].textContent, "test input"); // checks <li> value 

  const testOutput = checklist.children[1];
  testOutput.parentNode.removeChild(testOutput); // remove the test output from the DOM

});


/* See submitToDo in checkLit.js */

  test("Test to see if checkbox works when checked", () => {
    checked();
    equal(checkBox.checked,true);
  })

  test("Deleting an entry removes it from the list", () => {
    equal(deleteTodo(),1);
  })

//   setTimeout(() => {
//     test("Test to see if linethrough is added", () => {
//       equal(checkboxLinethrough(),"lineThrough");
//     })
//   }, 200);
// })
