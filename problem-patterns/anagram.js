//! Anagram
function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const search = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //! if letter exists, increment, otherwise set to 1
    search[letter] ? (search[letter] += 1) : (search[letter] = 1);
  }
  console.log(search);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //! can't find letter or letter is zero then it's not an anagram
    if (!search[letter]) {
      return false;
    } else {
      search[letter] -= 1;
    }
  }

  return true;
}

console.log(anagram('ana', 'ann'));
