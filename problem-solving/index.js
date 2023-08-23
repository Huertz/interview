// function charCount(str) {
//   var result = {};
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (result[char] > 0) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
// }

// console.log(charCount('1'));

//! refactor

function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (charCode(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

//! function is faster than expressions
function charCode(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //? numeric (0-9)
    !(code > 64 && code < 91) && //? upper alpha (A-Z)
    !((code > 96) & (code < 123)) //? lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

console.log(charCount('okay '));
