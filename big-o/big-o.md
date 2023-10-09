# Objectives

- Motivate the need for something like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define 'time comlexity' and 'space complexity'
- Evaluate the time complexity and space complexity
- Describe what algorithm is

# Who cares

- It's important to have a preceise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, indentifying parts of the code that are inefficient can help us find pain points in our applications
- It comes up in interviews

# What does better mean

- Faster?
- Less memory-intensive?
- More readable?

# The problem with time

- Different machines will record different times
- The same machine will record different times
- For fast algorithms, speed measurements may not be precise enough

# Big O

- Big O Notation is a way to formalize fuzzy counting

# Big O Cheat Sheet:

- Big O(1) Constant- no loops
- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear- for loops, while loops through n items
- O(n log(n)) Log Liniear- usually sorting operations
- O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
- O(2^n) Exponential- recursive algorithms that solves a problem of size N
- O(n!) Factorial- you are adding a loop for every element
- Iterating through half a collection is still O(n)
  Two separate collections: O(a \* b)

# What can cause time in a function?

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

# Rule Book

- Rule 1: Always worst Case
- Rule 2: Remove Constants
- Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b)
- for steps in order

* for nested steps

- Rule 4: Drop Non-dominant terms

# What causes Space complexity?

- Variables
- Data Structures
- Function Call
- Allocations
