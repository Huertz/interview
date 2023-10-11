# Merge Sort

# Merge Sort Introduction

- It's a combination of 3 things - spliting, merging and sorting!
- Exploits the fact that array of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then build up a newly sorted array

# Merging Arrays Intro

- In order to implement merge osrtm it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consist of all of the elements in the two imput arrays
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it

# Merging Arrays Pseudocode

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
- They must be sorted in the correct way
  - If the value in the first array is smaller than the value in the secound array, push the value in the first array into ur result and move on the next value in the first array
  - If the value in the first array is larger than the value in the secound array, psuh the value in the secound array into our result and move on the next value in the secound array
  - Once we exhaust one array, push in all remaining values form the other array
