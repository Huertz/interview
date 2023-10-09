# Naive String Search

- Suppose you want to count the number of times a smaller string appears in a longer string
- A straight forward approach involves checking pairs of characters individually

# Pseudocode

- Loop over the longer string
- Loop over the shorted string
- If the characters don't match, break out of the innver loop
- If the characters do match keep going
- If you complete the inner loop and find a match, increment the count of matches
