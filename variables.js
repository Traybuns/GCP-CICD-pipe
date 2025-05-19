// Understanding varuables and assigning values to them
let name = 'Manji', age = 27, note = 'Hey handsome'
 console.log ("Hello" +  name)

// copying the values of a variable into another
let Hello = 'Hello world'
let message;
message = Hello;
console.log (Hello);
console.log (message)

// To declare a variable that we dont want to change we use const instead of let eg
const myBirthday = '10.11.2001';
// hyphens are not allowed in javascript so we use dots (.) and underscores(_) to give space or use camel case
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
// capital named constants are only used as aliases for hard-coded values



// Task 1
let admin = 'John';
let name;
name = admin;
console.log ("Hello" + admin)
console.log (name)

// Task 2
let planet = 'earth';
let CurrentWebUser = 'New user';
