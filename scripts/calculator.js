window.onload = (function() {

  const screen        = document.querySelector("#screen")
  const buttonlist    = document.querySelectorAll("input[type='button']")

  const updateOps = function(buttonValue) {
    const ops           = {
      operands: [],
      operator: ''
    } 
    const buttonValues = {
      "C":  
    }

  }

  const getClickValue = function () {
    
    for (let button of buttonlist) {
      button.addEventListener("click", function() {
        updateOps(button.value)
        screen.textContent = button.value
      }) // end anonymous function
    } // end for loop
  } // end getclickvalue function
  

}) // end window.onload
