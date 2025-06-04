//Javascript errors and error handling
//javascript is very forgiving when it comes to errors

variable = "Manji";
console.log(Variable)

//this works even thouth we are typically still supposed to use const infront of the variable
//unless you use strict mode

"use srtict"
const variable = "Manji"
console.log(variable)

//2
Object..create()
//here we have a syntax error

//3
const name = "Manji"
name = "ola"
//here we have a type error because the value name has already been assigned

//4
const makeError = () => {
    try{
        const name = "Dave";
        name = "Joe";
    } catch (err) {
        console.error(err.stack);
    }
}
makeError();
//this issueues a warning of an error if you use console.warnwhich is usually yellow and error for normal red errors
const makeError = () => {
    try{
        throw new customError ("this is a custom error!");
    } catch (err) {
        console.erroe(err.name); 
        console.error(err.smessage);
        console.error(err.stack);
    }finally{
        console.log ("...finally"); 
    }
};
makeError();


functiom customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack=`$(this.name): $(this.message)`;
}


//
const makeError = () => {
    let i = 1;
    while (i <= 5) {
    try{
        if (i % 2 !== 0) {
            throw new Error ("Odd number");
        }
        console.log("Even number!");
    } catch(err){
        console.error{err.stack};
    } finally{
        console.log ("...finally");
        i++
    }
    }
};
makeError














