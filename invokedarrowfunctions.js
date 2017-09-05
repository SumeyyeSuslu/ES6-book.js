// ES6:
const sentence = 'How are you?';
const reversed_sentence = (() => {
  const arr = [...sentence];
  arr.reverse();
  return arr.join('');
})();
console.log(sentence);
console.log(reversed_sentence);

// Output:
"How are you?"
"?uoy era woH"


// Babel - ES5:
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sentence = 'How are you?';
var reversed_sentence = function () {
  var arr = [].concat(_toConsumableArray(sentence));
  arr.reverse();
  return arr.join('');
}();
console.log(sentence);
console.log(reversed_sentence);
