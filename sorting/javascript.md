# JavaScript has a sort method

- Yes, it does!

# Telling JavaScript how to sort

- The build in sort mehtod accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements(a and b), determines thier sort order based on the return value

  - If it returns a negative number, a should come before b
  - If it returns a positive number, a should come after b
  - If it returns 0, a and b are the same as far as the sort is concerned

# Examples

1.

function compare1(num1, num2) {
return num1 - num2
}

[6,4,15,10].sort(compare1)

2. function compare2(str1, str2) {
   return str1 - str2
   }

['Jose', 'Alfredo', 'Huerta', 'Valdes'].sort(compare2)
