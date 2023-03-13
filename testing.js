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


  test("Test to see if checkbox works when checked", () => {
    checked();
    equal(domCheckbox.checked,true);
  })

  test("Submitting a new list entry creates new list card", () => {
    const userInput = document.querySelector("#ListName");
    userInput.value = "test list";
    
    newList(); // call newList() imitating button click
  
    cardList = document.querySelectorAll(".card");
    
    equal(cardList.length, 2, "A new card is added to the original card list");
  
    cardList[1].remove();
  })
  
    test("New list card displays user input entered on form", () => {
      const userInput = document.querySelector("#ListName");
      userInput.value = "test input";
      
      newList(); // create new list card for test purpose
      
      cardList = document.querySelectorAll(".card"); // return list of cards
      displayHeading = cardList[1].querySelector("#list-heading").innerText; // test card heading
      
      equal(displayHeading, "test input", "New card correctly displays test list heading"); // check test card heading matches "test input"
  
      cardList[1].remove();
    })  

  test("Deleting a list card removes it from the page", () => {
    const userInput = document.querySelector("#ListName");
    userInput.value = "test list";
    
    newList(); // create new list card for test purpose

    let cardList = document.querySelectorAll(".card"); // cardList.length === 2
    
    closeList(cardList[1]); // call closeList() on test list

    cardList = document.querySelectorAll(".card"); // rescan to see updated cardList length

    equal(cardList.length, 1);

  })



