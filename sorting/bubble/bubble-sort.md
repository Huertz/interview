# Bubble Sort

- A sort algorith where the largest values bubble up to the top

# Function swap

- function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  }

# Pseudocode

- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning unitil i - 1
- If arr[j] is greater that arr[j+1], swap two values
