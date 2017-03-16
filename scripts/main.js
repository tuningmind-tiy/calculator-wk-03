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
        "+":  a + b,
        "-":  a - b,
        "&times;": a * b,
        "&divide;": a / b,
      }
      return operators[callback];
    }

    getClicks();
    function getClicks() {
      for (let button of buttons) {
        button.addEventListener("click", function () {
          if (button.value === "C") { clear() }
          else if (button.className === "num") { 
            screen.textContent += button.value;
            console.log(parseInt(button.value));
            operands.push(parseInt(button.value)) }
          else if (button.className === "operator") { 
            operator = button.value;
            screen.textContent += button.value;
          }
          else if (button.value === "=") {screen.textContent += button.value}
          if ((operands.length === 2) && operator) {
            screen.textContent += calculate(operands, operator)
          }
        })
      };
    }
}
    
    
window.onload = onLoad;
