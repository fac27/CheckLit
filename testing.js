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


  checkbox.addEventListener("click", function(){
    // This adds a class called "Linethrough" to the p elements if the checkbox is checked and removes it if it isn't. which is then used in the fucntion checkboxLinethrough()
    if(checkbox.checked == true){
      todo.classList.add("lineThrough")
    } else{
      todo.classList.remove("lineThrough")
    }
    test("Test to see if checkbox works when checked", () => {
      equal(checkboxTest(),true);
    })

    setTimeout(() => {
      test("Test to see if linethrough is added", () => {
        equal(checkboxLinethrough(),"lineThrough");
      })
    }, 200);
  })

