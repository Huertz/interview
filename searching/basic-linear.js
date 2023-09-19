function linearSearch(arr, val) {
  for (let i = 0; i <= arr.lenght; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
