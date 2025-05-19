// we can put any type of data into variables interchangably eg
let message = 'Hello';
message = 123456

// NUMBERS
let n = 123;
n = 12.245;
// we can use java script for maths
console.log(9007199254740991 + 1); 
console.log(9007199254740991 + 2); 

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// STRING
// in javascript a string must be surrounded by quotes single or double
let str = "Hello";
let str2 = 'Single quotes are ok too';

// backticks are a special kind of quotes that you use whwn you want to embed a string within a string
let phrase = `can embed another ${str}`;

let name = "John";

console.log ( `Hello, ${name}!` ); 
console.log (`the result is ${1 + 2}` ); 

// BOOL
let isGreater = 4 > 1;
let isLess = 'CalabarRice' < 'Sharwama'

console.log ( isGreater );
// Boolean values come as a result of comparing two different values

// NULL  this refers to a none existing object
let age = null


//TYPEOF
//used to check which data type is in use eg
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"




















