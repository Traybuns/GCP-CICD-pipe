// To create functions we have to declare them first,for this we use the keyword function
function showMessage () {
    console.log ('Hello everyone');
} 
showMessage()
showMessage()

//2 local variables
//a variable declared inside a function is only visible inside that function
function showMessage() {
    let message = "hello, I'm Bun";
    console.log (message);
}

showMessage();
console.log (message);

//CALLBACK FUNCTIONS
function ask(question, yes, no) {
    if (confirm(question)) yes()
        else no();
}

function showOk () {
    console.log ("You agreed.")
}

function showCancel() {
    console.log ("You canceled the execution");
}

ask("Do you agree?",showOk, showCancel);
//the arguments showOk and showCancel of ask are the callback functions

//FUNCTION DECLARATION
// a function declared as a separate statement in the main code flow

function sum (a,b) {
    return a + b;
}

let age = prompt ("what is your age?", 18);
    let welcome;
    if (age < 18) {
        welcome = function () {
            console.log("Hello");
        };
    } else {
        welcome = function() {
            console.log("Greetings")
        };
    }
welcome();

//Arrow Function
//This is a simpler way to create functions than function expressions
let func = (arg1, arg2, ..., argN) => expression;
//is the shorter version of

let func = function(arg1, arg2, ..., argN) {
    return expression;
  };

// 2
let sum = (a,b) => a+b
console.log(sum(1,2))

//3
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

//RECURSIVE FUNCTIONS
//a function that calls itself is called a recursive function
function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 3));
  // it is an alternative to looping
  function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ??
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24));
 

// immediately invoked function expressions or self invoking functions
(function () {
    // Do something
  })();
  
  const value = (function () {
    // Do something
    return someValue;
  })();

// 2
(function (name) {
    console.log("Hello, " + name);
})("Rhonda");

//3 
const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        }
    };
})();

counter.increment(); 
counter.increment(); 

  
//  A higher-order function is any function that does one or both of the following:
//Takes another function as an argument or Returns a function
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); 

//2
function greetUser(greetingFn) {
    const name = "Rhonda";
    greetingFn(name);
}

function sayHello(name) {
    console.log("Hello, " + name);
}

greetUser(sayHello); 
























