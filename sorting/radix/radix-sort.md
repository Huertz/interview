# Radix Sort

- Radix sort is a special sorting algorithm that works on list of numbers
- It never makes comparasions between elements
- It exploits the fact that information about size of a number is encoded in the right number of digits
- More digits means a bigger number

# Radix Sort Helpers

- In order to implement radix sort, it's helpful to build a few function first
- getDigit(num, place) - returns the digit in num at the given place value

# Radix Sort Pseudocode

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to his largest number of digits
- For each interation of the loop:
  - Create buckets for each digit(0 to 9)
  - Place each number in the corresponding bucket based on its kth digit
- Replace out existing array with values in uor buckets, starting with 0 and going to up 9
- Return list at the end!
