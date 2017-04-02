const calculator = ( function() {

  const screen        = document.querySelector("div#screen")
  const buttonlist    = document.querySelectorAll("input[type='button']")
  // const ops           = {
  //   operands: [],
  //   operator: '',
  //   answer: ''
  // } 
  // const isEqualSign   = function( value ) { return value === "=" }
  // const isOperator    = function( operatorString ) {
  //   return ["+","-","×","÷"].indexOf( operatorString ) >= 0 
  // }
  // const isNumber      = function( buttonValue ) {
  //   buttonVal = Number(buttonValue)
  //   return ( typeof( buttonVal ) === 'number' )
  // }
  // const opfunctions   = {
  //   "+": function( operands ) { return operands[0] + operands[1]},
  //   "-": function( operands ) { return operands[0] - operands[1]},
  //   "×": function( operands ) { return operands[0] * operands[1]},
  //   "÷": function( operands ) { return operands[0] / operands[1]}
  // }
  // const makeAnswer    = function( opfunction, operands ) {
  //   operands = operands.map(Number)
  //   const calculated = opfunctions[opfunction](operands)
  //   return calculated
  // }

  // const updateOps = function( buttonValue ) {
  //   if ( buttonValue === "C" ) {
  //     ops.operands = [],
  //     ops.operator = ''
  //   } else if ( isOperator( buttonValue )) {
  //     ops.operator = buttonValue
  //   } else if ( isNumber( buttonValue )) {
  //     ops.operands.push( buttonValue )
  //   } else if ( isEqualSign( buttonValue )) {
  //     ops.answer = makeAnswer( ops.operands, ops.operator )
  //   }
  // }
  function getClickValue( nodelist ) {
    for ( var button of buttonlist ) {
      button.addEventListener( "click", function() {
        console.log(button.value)
      return button.value
      }) 
    } 
  } 

  const printToScreen = function( buttonValue ) {
    screen.textContent += buttonValue
  }

  return {
    buttonlist:     buttonlist, 
    screen:         screen,
    getClickValue:  getClickValue,
    printToScreen:  printToScreen
  }
  
})() 

window.onload = calculator
debugger
let buttonValue = calculator.getClickValue( calculator.buttonlist )
calculator.printToScreen( buttonValue )
console.log("buttonValue : ", buttonValue )

