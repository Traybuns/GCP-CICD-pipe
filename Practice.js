//Practicing functions
function hello(){
    console.log("hello")
    console.log("bye")
}
 hello()

// function sum (a,b){
//     console.log(a + b);
//     console.log(a * b);
// }
// sum(1, 2);
// const a = 1;
// const b = 2;
// console.log(a + b);
// console.log(a * b);

function sum (a,b){
return a + b
}

const value = sum(1,2)
console.log(value)
//////////////////////////////////////////////////////////////////////////////
 
function printMe(){
    console.log("printing.....");
}
printMe();

function printThis(param){
    console.log(param);

}
printThis ('tapas')

function sum(a,b) {
return a+b
}
sum(6,7)
//default functions
function calc(b=7,c=12){
    return (2*(b +c))
}
calc()
// calc(5,6)

// calc(4,9)
////////////// REST PARAMETER/////////////
function collectThings(x,...  y){
console.log(x);
console.log(y);
}
collectThings(1,2,3,4,5,6,7,8,9 )

//ARROW FUNCTION
const add = (x,y) => {
    return x+y;
}
add(2,3)

const addit = (x,y) => x+y
addit (2,2)

const calc = (s,b) => b+s
calc (4,2)

//nested functio vns
function outer() {
    console.log('outer');
      function inner(){
        console.log('inner');
      } 
      inner();
}

function doSomething(){
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x,y,z);
}

doSomething();
 
var x = 10;
const y =20;
let z = 30;

function doSomething(){
    console.log(x,y,z)
}
doSomething()
//closed functions
function outer(x){
    function inner(y){
        return x+y;
    }
    return inner; 
}

//callback functions
//passing functions as a parameter to other functions
function party(bar){
    if(itsNight){
        bar();
    }
    if(partyHasStarted){
        bar();

    }
}

//heirachial functions: it takes one or more functions as argument, it may return a function
function gateCapture(camera){
    camera();
}
gateCapture (function(){
    console.log('Canon')
})

function returnFn(){
    return function(){
        console.log('returning');
    }
}
const fn = returnFn();
fn()

// pure functions: produces the same output for te same input
function sayGreeting(name){
    return `hello ${name}`;
}

sayGreeting('Bun');
let greeting = "Hello";
function sayGreeting(name){
    return `${greeting} ${name}`;
}
sayGreeting ('Bun')
greeting = 'Hello beautiful';
sayGreeting('Bun')

//recursion a function that ecalls and calls itself
function foo(){

}
function foo(){
    console.log('foo');
    foo();
}
foo();

const foo = function buz(){
    buz();
}

function recurse() {
    if(base_consition) {
        //do something
        return;
    }
    recurse();
}

//2
function fetchWater(count){
    if(count===0) {
        console.log('No more water left');
        return;
    }
    console.log('Fetching water...');
    fetchWater(count -1);
}

fetchWater(5);