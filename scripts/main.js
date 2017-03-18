module.exports = (function () {
  const buttonlist = document.querySelectorAll("input[type='button']");
  const screen = document.querySelector("#screen")
  let operands = []
  let operator = ""

  function calculate (arr, operator) {
    function add(arr) { arr[0] + arr[1] }
    function subtract(arr) { arr[0] - arr[1] }
    function multiply(arr) { arr[0] * arr[1] }
    function divide(arr) { arr[0] / arr[1] }
    const operators = {
      "+": add,
      "-": subtract,
      "×": multiply,
      "÷": divide,
    }
    return operators[operator](arr)
  }

  function getclick() {
    if (button.value === "C") { return clear() }
    else if (button.className === "num") { 
      operands.push(parseInt(button.value)) 
      return screen.textContent += button.value;
    }
    else if (button.className === "operator") { 
      operator = button.value;
      return screen.textContent += button.value;
    }
    else if (button.value === "=") {
      screen.textContent += button.value
      return screen.textContent += calculate(operands, operator)
    }
  }

  function addListeners(nodelist) {
    for (let button of nodelist) {
      button.addEventListener("click", function () {
        getclick(button)

      })
    };
  }
  function clear() {
    screen.textContent = ""
    operands = []
    operator = ""
  }

      
  addListeners(buttonlist)

  // variables are available because of lexical scoping
  // ie they are pulled in in the order they appear in the code

  // buttonlist
  // button creation
  // eventlistener
  // handling event
  })()
