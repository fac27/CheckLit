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

/* RED: a failing test
  test("Submitting a new task adds it to the list", () => {
    equal(submitToDo(), "Add new task to the list")
  });

function submitToDo(){}
*/


/* GREEN: make the test pass (simplest level)
  function submitToDo(){
    return "Add new task to the list";
}
*/

// GREEN: make the test pass

function runTest(){
  test("Submitting a new task adds it to the list", () => {
    toDo = document.createElement("input"); // create input replica for test purpose
    toDo.value = "test input"; // set value 
    checklist = document.createElement("ul");

    submitToDo(toDo, checklist) // call function

    equal(checklist.children.length, 1);
    equal(checklist.children[0].tagName, "LI");
    equal(checklist.children[0].innerHTML, "test input");
    
  
  });

}

runTest()

/* See submitToDo in checkLit.js */