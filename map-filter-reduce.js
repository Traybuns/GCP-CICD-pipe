//map
const array = [1,5,6,4,23,4,5,2,4];

const newArray = []
for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]*2);
}
console.log(array);
console.log(newArray);

//or
const array = [1,5,6,4,23,4,5,2,4];
const newArray = array.map((number) => {
    return number * 2;
});
console.log(array);
console.log(newArray)

//filter
const array =  [1,5,6,4,23,4,5,2,4];
const newArray = array.filter(number) => {
    return number < 5;
};
console.log(array);
console.log(newArray);

//reduce
const array = [1,5,6,4,23,4,5,2,4];
const newArray = []

for(let i = 0; i < array.length; i++) {
    newArray.push(`Number: ${array[i]}`)
}
console.log(array);
console.log(newArray);
////
const array = [1,5,6,4,23,4,5,2,4];
const newArray = array.reduce((total,number) =>{
    return total.concat(`Number: ${number}`);
}, []);
console.log(array); 
console.log(newArray);


// short notes
// map()
//     What it does:
//     Transforms every element in an array and returns a new array with the same length.
//     When to use it:
//     When you want to apply a function to each item in an array and return a modified version of each.
//further examples

// Multiply each number by 2
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]

// Extract names from user objects
const users = [{name: "A"}, {name: "B"}];
const names = users.map(user => user.name); // ["A", "B"]

// filter()
//     What it does:
//     Filters out elements based on a condition and returns a new array with matching elements.
//     When to use it:
//     When you want to remove elements that don't meet a certain condition.

// Keep only even numbers
const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// Get users above age 18
const people = [{age: 17}, {age: 20}];
const adults = people.filter(p => p.age >= 18); // [{age: 20}]


// reduce()

//     What it does:
//     Reduces an array to a single value (e.g., sum, product, object).

//     When to use it:
//     When you want to accumulate values (e.g., sum numbers, count items, build structures).

// Sum all numbers
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, cur) => acc + cur, 0); // 10

// Count word occurrences
const words = ["apple", "banana", "apple"];
const count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {}); // { apple: 2, banana: 1 }























