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

# Common recursion pitfalls

- Where things can go wrong

1. No base case
2. Forgetting to return or returning the wrong thing!
3. Stack overflow!
