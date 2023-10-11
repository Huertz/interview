// gerDigits
function getDigits(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

// digitCount
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits
function mostDigits(num) {
  let maxDigits = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(num[i]));
  }
  return maxDigits;
}
