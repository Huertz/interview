# Quick Sort

- Like merge sort, exploits the fact that array of 0 or 1 element are always sorted
- Works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

# Pivot Helper Introduction

- In order to implement merge sort, it's useful to first implement a function responsible arranging elemets in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values greater than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter!
- The helper should do this in place, that is, it should not create a new array
- When complete, the helper should retrun the inmdex of the pivot

# Picking a pivot

- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we'll always choose the pivot to be the first element(we'll talk about consequences of this later)

# Pivot Pseudocode

- It will help to accept three argument: an array, a start index, and an end index(these can be dafaulted to 0 and the arrray length minus 1)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable(this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
  - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element(pivot) with the pivot index
- Return the pivot index

# Quick Sort Pseudocode

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right
- Your base case occurs when your consider a subarray with less than 2 elements
