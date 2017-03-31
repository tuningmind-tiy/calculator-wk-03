;const calculator = (function () {

  const buttonlist  = document.querySelectorAll("input[type='button']");
  const screen      = document.querySelector("#screen")
  const ops         = {
                         operands: [],
                         operator: ""
                      }
  const opfunctions = {
    "+": function (operands) { return operands[0] + operands[1] },
    "-": function (operands) { return operands[0] - operands[1] },
    "×": function (operands) { return operands[0] * operands[1] },
    "÷": function (operands) { return operands[0] / operands[1] }
                      }


  const makeAnswer = function (opfunction, operands) {
    operands = ops.operands.map(Number)
    console.log(operands)
    const calculated = opfunctions[opfunction](operands)
    return calculated
  }

  let opfunction = opfunctions[ops.operator]
  let operands = ops.operands
  const answer = makeAnswer(opfunction, operands)
  
  const updateOps = function(buttonValue) {
  // takes an empty array and an operation
  // returns object containing operands, operator, and calculated result
    if (buttonValue === "C") { 
      ops.operands = [];
      ops.operator = "";
    }
    else if (typeof (buttonValue) === "number") { 
      ops.operands.push(parseInt(buttonValue)) 
    }
    else if (buttonValue === "=") {
      ops.calculated = makeAnswer(ops.operands, ops.operator)
    }
    else if (["+","-","×","÷"].indexOf(buttonValue ) > 0) { 
      ops.operator = buttonValue;
    }
    return ops 
  }

  const getClickValue = function(nodelist) {
  /* takes a nodeList
  creates an event listener for each node in the list
  returns the value collected by clicking on one of those nodes */
    for (let button of nodelist) {
      button.addEventListener("click", function () {
        return button.value
      })
    }
  }
  const buttonValue = getClickValue(buttonlist)

  const printToScreen = function(buttonValue) {
  // takes a button value
  // adds the button value to the screen node
    screen.textContent += button.value
  }


  //const ops = getOps(buttonValue)
  //const calculated = calculate(ops)
  //const
  const log = function() {
    return console.log("build worked")
  }

  return {
    log: log,
    updateOps: updateOps,
    ops: ops,
    calculate: calculate,
    getClickValue: getClickValue
  }
})()

module.exports = calculator

