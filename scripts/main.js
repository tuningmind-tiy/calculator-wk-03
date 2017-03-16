function onLoad() {
  
    const buttons = document.querySelectorAll("input[type='button']");
    let screen = document.querySelector("#screen")
    let operands = [];
    let operator = "";

    function clear() {
      screen.textContent = "";
      operands = [];
      operator = "";
    }

    function calculate(arr, callback) {
      let a = arr[0];
      let b = arr[1];
      let operators = {
        "+": a + b,
        "-": a - b,
        "×": a * b,
        "÷": a / b,
      }
      return operators[callback];
    }

    getClicks();

    function getClicks() {
      for (let button of buttons) {
        button.addEventListener("click", function () {
          if (button.value === "C") { return clear() }
          else if (button.className === "num") { 
            operands.push(parseInt(button.value)) 
            return screen.textContent += button.value;
          }
          else if (button.className === "operator") { 
            operator = button.value;
            return screen.textContent += button.value;
          }
          else if ((operands.length === 2) && operator) {
            screen.textContent += calculate(operands, operator)
          }
          else if (button.value === "=") {return screen.textContent += button.value}
        })
      };
    }
}
    
    
window.onload = onLoad;
