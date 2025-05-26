// Destructuring assignment syntax is a javascript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables
let fruits = ['apple','watermelon','grapes'];

let [apple,watermelon,grape] = fruits;

console.log(apple,watermelon,grape);

//to skip the assignment of aa variable you use the double comma or space ie [sand,,spit]
let num1 = 5, num2 = 8;
let temp = num1;
num1 = num2;
num2 = temp;

[num2, num1] = [num1,num2]
console.log(num1,num2)

//Rest syntax
let fruits = ['apple','watermelon','grapes','banana','avocado'];

let [apple,watermelon,grape,...restFruits] = fruits;

console.log(apple,watermelon,grape);
console.log(restFruits);

//fn
function operate(operation,...operands){
    console.log(operands);
    let result = 0;
    for(let i =0; i < operands.length; i++) {
        switch (operation) {
            case 'add':
                result += operands[i];
                break;
            case 'average':
                result += operands[i] / operands.length;
                break;    
        }
    }

}
operate('add',2,3,6);

//spread syntax
//spread syntax(...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements(for array literals) are expected or an object expression to be expanded in places whwere zero or more key-value pairs (for object literals are expected.) 
let array1 = [ 2,5,0];
let result;
result = [...array1];
console.log(result);

const x = (a,b,c) => {
    console.log(a,b,c); 
}
x(...array1);

// since rest and spread syntax both use 3 dots how do we tell the difference?
// it depends on the context, if it is used in the assignment of variables it is a rest syntax all other context is spread syntax

let array3 = [2,5,0];
let array4 = [4,6];
let answer;
answer = [...array3,...array4];
console.log(answer);

let name = 'lovenAffection';
let nameCharacters = [...name];
console.log(nameCharacters);

let idCardDetails = {
    idNumber: 'DNF098',
    name: 'Bunrinmwa Gobum',
    department: 'IT'
};

let address = {
    state: 'Plateau state',
    city: 'Jos',
    angwa: 'Hwolshe',
    country: 'Nigeria'
}

let bungobum = {
    gender: 'female',
    ...idCardDetails,
    ...address
}

//OBJECT DESTRUCTURING AND REST SYNTAX
let user = {
    id: 4564,
    userName:'admin',
    password: '$asd23',
    state: 'Plateau State',
    city: 'Jos',
    country: 'Nigeria'
}

let {id, userName, password} = user;
console.log (id, userName, password);

//rest: unpacking nested properties
let user = {
    id: 4564,
    userName:'admin',
    password: '$asd23',
    address: {
        state: 'Plateau State',
        city: 'Jos',
        country: 'Nigeria'
    }
}

let {id, userName, address:{city}} = user;
console.log (id, userName,city,address);













