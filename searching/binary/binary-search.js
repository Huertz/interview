// Origianl Solution
// function binarySearch1(arr, e) {
//  implements start, middle, end
//   let start = 0;
//   let end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== e && start <= end) {
//     if (e < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (arr[middle] === e) {
//     return middle;
//   }
//   return -1;
// }
//

// Refactor Version
function binarySearch(arr, e) {
  //! implements start, middle, end
  let start = 0;
  let end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== e && start <= end) {
    if (e < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === e ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 40));
