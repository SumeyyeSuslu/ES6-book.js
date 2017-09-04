// ES5:
var x=3;
function func(randomize){
  if (randomize){
    var x=Math.random(); // (A) scope:whole function
    return x;
  }
  return x; // accessing the x from line A
}
func(false); //undefined

//ES5:
var x=3;
function func(randomize){
  var x;
  if (randomize){
     x=Math.random(); 
    return x;
  }
  return x; 
}
func(false); //undefined

// ES6:
let x=3;
function func(randomize){
  if (randomize){
    let x=Math.random(); 
    return x;
  }
  return x; 
}
func(false); //3

// let declared variable tmp only exists inside the block.
function order(x,y){
  if (x>y){
    let tmp = x;
    x=y;
    y=tmp;
  }
  console.log(tmp===x); // ReferenceError:tmp is not defined
  return [x,y];
}

const foo;

//Output:
"error"
"SyntaxError: Missing initializer in const declaration
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"
// const creates immutable variables
const bar=123;
bar=456;
const foo='abc';
foo='def';

//Output:
"error"
"TypeError: Assignment to constant variable.
    at bukeqinuro.js:2:4
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"

for ( const x of ['a','b']){
  console.log(x);
}

//Output:
"a"
"b"

// const-declared variable tmp only exists inside the block.
function func(){
  if (true){
    const tmp=123;
  }
  console.log(tmp); // ReferenceError: tmp is not defined
}

// var-declared variables are function-scoped.
function func(){
  if (true){
    var tmp=123;
  }
  console.log(tmp); // 123
}

// let creates mutable variables:
let foo='abc';
foo = 'def';
console.log(foo); //def
// obj is a constant but the value is mutable
const obj = {};
obj.prop=123;
console.log(obj.prop);

//Output:
123
// If we want also value is immutable;
const obj = Object.freeeze({});
obj.prop=123;
console.log(obj.prop);

// Output:
"error"
"TypeError: Object.freeeze is not a function
    at bukeqinuro.js:1:25
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"
// It only freezes the properties of its argument, not the objects stored in its properties.
// the object obj is frozen
const obj = Object.freeeze({foo:{}});
obj.bar=123;
obj.foo={};
obj.foo.qux='abc';
