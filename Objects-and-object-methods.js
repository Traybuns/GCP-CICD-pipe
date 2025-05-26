// objects come with key value pairs and they are in curly braces
const myObj = { name: "Manji" };

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "moimoi"
    },
    action: function () {
        return `Time for ${this.beverage.morning}`;
    }
};

console.log(anotherObj.action()); 

// 2
 const vehicle = {
    wheels: 4,
    engiene: function() {
        return "vroomVroom"
    }
 };

 const truct = Object.create(vehicle);
 truck.doors = 2;
 console.log(truck);
 console.log(truck.wheels);
 console.log(truck.engiene());
 const car = Object.create(vehicle);
 car.doors = 4;
 car.engine = function() {
    return "Woosh"
};
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
    return "clear way, we get money.."
};
console.log(tesla.engine());
