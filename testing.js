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





// checkbox dom element
  const checkbox = document.querySelector("#checkbox");
  // p tag dom element
  const todo = document.querySelector(".todo");

  // this returns either true if checked or false if isn't and is used in the equals function for "Test to see if checkbox works when checked"
  function checkboxTest(){
    return checkbox.checked;
  }

  // if the p element has the class "linethrough" this returns the string "linethrough which is used in the equal funtion for the "Test to see if linethrough is added"
  function checkboxLinethrough(){
    if(todo.classList.contains("lineThrough")){
      return "lineThrough"
    } else{
      return "no linethrough"
    }
  }


  // checkbox.addEventListener("click", function(){
  //   // This adds a class called "Linethrough" to the p elements if the checkbox is checked and removes it if it isn't. which is then used in the fucntion checkboxLinethrough()
  //   if(checkbox.checked == true){
  //     todo.classList.add("lineThrough")
  //   } else{
  //     todo.classList.remove("lineThrough")
  //   }
  //   test("Test to see if checkbox works when checked", () => {
  //     equal(checkboxTest(),true);
  //   })

  //   setTimeout(() => {
  //     test("Test to see if linethrough is added", () => {
  //       equal(checkboxLinethrough(),"lineThrough");
  //     })
  //   }, 200);
  // })


