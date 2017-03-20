/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const calculator = __webpack_require__(0)

calculator.log()
console.log(calculator.getOps(3))


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map