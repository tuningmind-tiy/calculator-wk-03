const calculator = ( function() {
  const screen        = document.querySelector("div#screen")
  const buttonlist    = document.querySelectorAll("input[type='button']")

  const ops           = {
    operands: [],
    operator: '',
    answer: ''
  } 
  const isEqualSign   = function( value ) { return value == "=" }
  const isOperator    = function( operatorString ) {
    return ["+","-","×","÷"].indexOf( operatorString ) >= 0 
  }
  const isNumber      = function( buttonValue ) {
    buttonVal = Number(buttonValue)
    return ( !isNaN( buttonVal ) )
  }
  const opfunctions   = {
    "+": function( operands ) { return operands[0] + operands[1]},
    "-": function( operands ) { return operands[0] - operands[1]},
    "×": function( operands ) { return operands[0] * operands[1]},
    "÷": function( operands ) { return operands[0] / operands[1]}
  }
  const makeAnswer    = function( opfunction, operands ) {
    operands = operands.map(Number)
    const calculated = opfunctions[opfunction](operands)
    return calculated
  }

  const updateOps = function( buttonValue ) {
    if ( buttonValue === "C" ) {
      ops.operands = []
      ops.operator = ''
      screen.textContent = ''
    } else if ( isOperator( buttonValue )) {
      ops.operator = buttonValue
    } else if ( isNumber( buttonValue )) {
      ops.operands.push( buttonValue )
    } else if ( isEqualSign( buttonValue )) {
      ops.answer = makeAnswer( ops.operator, ops.operands)
    }
  }
  for ( let button of buttonlist) {
    button.addEventListener( "click", function() {
      printToScreen( button.value )
      updateOps( button.value )
      if (isEqualSign( button.value )) { printToScreen( ops.answer ) }
    }) 
  } 

  const printToScreen = function( buttonValue ) {
    screen.textContent += buttonValue
  }

  return {
    buttonlist:     buttonlist, 
    screen:         screen,
    printToScreen:  printToScreen
  }
  
})() 


