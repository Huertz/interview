# Binary Search

- Binary search is a much faster form of search
- Rather than eliminating one slement at a time, you can eliminate half of the remaining elements at a time
- Binary search only workds on sorted arrays

# Divide and Conquer

- Pick up a point in the middle of the array basically

# Psedocode

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
- If you never find the value, return -1
