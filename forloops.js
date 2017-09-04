// ES6:
// var declaring variable in the head of a for loop creates a single binding(storage space) for that variable.
const arr = [];
for ( var i=0; i<3; i++){
  arr.push(()=>i);
}
arr.map(x=>x()); //[3,3,3]
console.log(arr);

// Every i, in the bodies of the three arrow functions refers to the same binding, so return the same value.
// Output:
[()=>i, ()=>i, ()=>i]

// let-declare variable a new binding is created for each loop iteration:
const arr = [];
for ( let i=0; i<3; i++){
  arr.push(()=>i);
}
arr.map(x=>x()); //[0,1,2]
console.log(arr);

// Can't change the initial value of const-declared variable.

for ( const i=0; i<3; i++){
 console.log(i);
}
// Output:
"error"
"TypeError: Assignment to constant variable.
    at bukeqinuro.js:1:94
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"
    
 // for-of loop:
 // In the for-of loop, var creates a single binding.
 const arr = [];
for ( var i of [0,1,2]){
  arr.push(()=>i);
}
arr.map(x=>x()); // [2,2,2]
// const creates one immutable binding per iteration.
const arr = [];
for ( const i of [0,1,2]){
  arr.push(()=>i);
}
arr.map(x=>x()); // [0,1,2]

// for-in loop:
