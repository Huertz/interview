//! How recursive function work
//? Invoke the SAME function with a different input until you reach your base case!

//! Bacse case
//? The condition when the recursion ends

//! Two essential parts of a recursive function!
//? Base case
//? Different input

//! First recursive function
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
