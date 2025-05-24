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











