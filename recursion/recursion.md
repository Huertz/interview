# Recursion

# Objectives

1.  Define what recursion is and how it can be used
2.  Understand the two essential components of a recursive function
3.  Visualize the call stack to be better debug and understand recursive functions
4.  Use helper method recuursion and pure recursion to solve more difficult problems

# What is recursion

- A process(a function in our case) that calls itself

# Why do I need to know this?

- It's EVERYWHERE!
- JSON.parse / JSON.stringfly
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a clean alternative to iteration

# Why do I care?

- You're used to function being pushed on the call stack and popped off when they are donde
- When we write recursive functions, we keep pushing new functions onto the call stack!

# Two essential parts of the recursive function

- Base case
- Different input

# Common recursion pitfalls

1. No base case

- The condition when the recursion ends[the most important concept to understand]

2. Forgetting to return or returning the wrong thing!

3. Stack overflow!

# Pure recursion tips

- For arrays use methods like slice, the spread operator, and concat that make copies of arryas so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assing, or the spread operator
