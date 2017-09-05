// Convert arguments to an Array:
function format(pattern){
  var params = Array.prototype.slice.call(arguments,1);
  return params;
}
console.log(format('a','b','c'));

// Output:
["b", "c"]
