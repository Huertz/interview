//! Naive Solution
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

//! Refactor solution
//? basically checks if the length between arr1 and arr2 is not the same return false
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //? empty object for arr1
  let frequencyCounter1 = {};
  //? empty object for arr2
  let frequencyCounter2 = {};
  for (let val of arr1) {
    //? checks the frequency for arr1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    console.log(frequencyCounter1[val]);
  }
  console.log('SPACE');
  //? checks the frequency of arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    console.log(frequencyCounter2[val]);
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 4, 5], [1, 4, 16, 25]));
