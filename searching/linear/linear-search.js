function linearSearch(arr, val) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return false;
}

console.log(linearSearch([34, 56, 1, 2], 34));
