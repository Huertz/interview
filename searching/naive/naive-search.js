function naiveSearch(long, short) {
  var count = 0;

  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      // [i + j] helps track the array
      if (short[j] !== long[i + j]) break;
      // if index of j = 2 the omg matches it increments a score
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'pop'));
