function binarySearch(arr, ele) {
  //! implements start, middle, end
  let start = 0;
  let end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== ele && start <= end) {
    //! other way to code if else statements
    if (ele < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
  }
  return arr[middle] === ele ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13));
