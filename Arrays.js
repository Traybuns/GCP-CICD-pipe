//Arrays are used to store ordered collections
//there are two syntaxes used for creating arrays
let arr = new Array();
let arr = [];
//we use the second one most of the time, the total count of an array is called its length
let fruits = ["yam", "mango","Tomatoes"];
console.log (fruits[0]);
// [we can also replace items in an array by
fruits[0] = "Banana";
 
// an array can store elemets of any type
let arr = ['Apple',{name: 'John'},true, function (){console.log('hello');}];
console.log (arr[3].name);

//if you have a very long list of objects in an array you can use this method to find items at the bottom
let fruits = ["Apple","Orange","Plum"];
console.log (fruits.at(-1));

//Stack
//stack supports two functions push(adds an element to the end) and pop(takes an element from the end)
let fruits = ["apple","guava","pear","orange"];
console.log(fruits.pop());
console.log(fruits)

//push
let fruits = ["apple","guava","pear","orange"];
console.log(fruits.push("avacodo"));
console.log(fruits);

//shift: Extracts the first element of the array and returns it
let fruits = ["Apple", "Orange", "Pear"];
console.log( fruits.shift() ); 
console.log( fruits ); r

//unshift: Add the element to the beginning of the array
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
console.log( fruits ); 

// push X unshift
let fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
console.log( fruits );




