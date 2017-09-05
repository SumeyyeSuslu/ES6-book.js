//ES6:
function func(arg){
  let arg; // static error
}

// 
function func(arg){
  {
  let arg; // shadow parameter arg
  }
}

// ES5:
function func(arg){
  var arg; // does nothing
}

//
function func(arg){
  {
  var arg; // does nothing
  }
}

// parameter default values and the TDZ
// 'y' accesses 'x' after it has been declared.
function foo(x=1, y=x){
  return [x,y];
}
console.log(foo());

// Output:
[1, 1]

// Exception: 'x' tries to access 'y' within the TDZ:
function bar(x=y, y=2){
  return [x,y];
}
console.log(bar());

// Output:
"ReferenceError: y is not defined
    at bar (bukeqinuro.js:2:16)
    at bukeqinuro.js:5:38
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"

// Parameter default values don't see the scope of the body
const foo = 'outer';
function bar (func=x => foo){
  const foo ='inner';
  console.log(func());
}
console.log(bar());

// Output:
"outer"
undefined
//Babel - ES5:
'use strict';

var foo = 'outer';
function bar() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
    return foo;
  };

  var foo = 'inner';
  console.log(func());
}
console.log(bar());
