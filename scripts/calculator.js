const calculator = (function () {
  
  const getOps = function(buttonValue) {
  // takes an empty array and an operation
  // returns object containing operands, operator, and calculated result
    const ops = {
      operands: [],
      operator: "",
      calculated: ""
    }
    if (buttonValue === "C") { 
      ops.operands = [];
      ops.operator = "";
    }
    else if (typeof (buttonValue) === "number") { 
      ops.operands.push(parseInt(buttonValue)) 
    }
    else if (typeof (buttonValue === "number")) { 
      ops.operator = buttonValue;
    }
    else if (buttonValue === "=") {
      ops.calculated = calculate(ops.operands, ops.operator)
    }
    return ops 
  }

  const calculate = function(ops) {
  // takes object containing an array of numbers and an operation
  // returns a number that is the result of calling the operation on the array's numbers 
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
    return operators[ops.operator](ops.operand)
  }

  const getClickValue = function(nodelist) {
  // takes a nodeList
  // creates an event listener for each node in the list
  // returns the value collected by clicking on one of those nodes
    for (let button of nodelist) {
      button.addEventListener("click", function () {
        return button.value
      })
    }
  }

  const printToScreen = function(buttonValue) {
  // takes a button value
  // adds the button value to the screen node
    screen.textContent += button.value
  }

  //const buttonlist = document.querySelectorAll("input[type='button']");
  //const screen = document.querySelector("#screen")

  //const buttonValue = getClickValue(buttonlist)
  //const ops = getOps(buttonValue)
  //const calculated = calculate(ops)
  //const
  const log = function() {
    return console.log("build worked")
  }

  return {
    log: log,
    getOps: getOps
  }
})()

module.exports = calculator
