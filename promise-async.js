//fetch api requires a discussion of
//callbacks, promises,thenables and async/await


//CALLBACKS....refresher
function firstFunction (parameters,callback){
    //do stuff
}

//
firstFunction(para,function(){
    secondFunction(para,function(){
        thirdFunction (para,function());
    })
})
//this can go on and on and become difficult to read and understand and thats why promises came in

//PROMISES - had 3 stages
//pending,fulfilled and rejected

const myPromise = new Promise((resolve,reject) =>{
    const error = false;
    if (!error) {
        resolve("yes! resolved the promise");
    } else{
        reject("No! rejected the promise");
    }
});

console.log(myPromise)

myPromise.then(value =>{
    console.log(value);
})
//thenable
myPromise.then(value => {
    return value +1;
})
.then(newValue => {
    console,log(newValue);
})
.catch(err =>{
    console.error(err);
})

//simulating a fetch

const myAlkawali = new Promise((resolve,reject) =>{
    const error = false;
    if (!error) {
        resolve("yes! resolved the promise");
    } else{
        reject("No! rejected the promise");
    }
});
const myNextPromise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve("myNextPromise resolved!")
    }, 3000);
});


myNextPromise.then(value => {
    console.log(value);
})
myNextPromise.then(value => {
    console.log(value);
})

//pending state of promises with the fetch api
const users =fetch("https://jsonplaceholder.tyicode.com/user")
console.log(users);

fetch("https://jsonplaceholder.tyicode.com/user")
 .then(response =>{
    return response.json(); 
 })
 .then(data =>{
    data.forEach(user => {
        console.log(user);
    })
 });

 console.log(users);

 //ASYNC/AWAIT
 const myUsers = {
    userList: []
 }
const myCoolFunction = async () => {
    const response = await fetch ("https://jsonplaceholder.tyicode.com/user");
    const jsonUserData = await response.json();
    console.log (jsonUserData);
    return jsonUserData;
}

myCoolFunction();

const anotherFunc = async() => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList);

//2
const getAllUserEmails = async() => {
    const response = await fetch ("https://jsonplaceholder.tyicode.com/user");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })
    
    postToWebPage(userEmailArray);
}
const postToWebPage = (data) = {
    console.log(data);
}
getAllUserEmails();



//the second parameter of fetch is always an object

const getDadJoke = async() => {
    const response = await fetch ("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData.joke);
}
getDadJokes();










