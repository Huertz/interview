//! First let's talk about functions
//? In almost all program languages, there is a build in data structure that manages
//? what happens when function are invoked
//? It;s named the call stack!

//! The call stack
//? Any time a function is invoked it is places(pushed) on the top of the call stack
//? When Javascript sees the return keyword or when the function ends, the compiler will remove(pop)

//! Example
function takeShower() {
  return 'Showering!';
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('Ok ready to go to work!');
}

wakeUp();
