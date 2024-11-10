// 1. destructuring pada array

const fruit = ['Apple', 'Banana', 'Cherry'];

const [fruit1, fruit2, fruit4] = fruit;

console.log(fruit1);

const color = ['Red', 'Green'];

const [primary, ,secondary = 'Blue'] = color;

console.log(primary);
console.log(secondary);

// 2. destructuring pada object

const person = {
    name : 'John',
    age : 30,
    city : 'New York'
}

// kita dapat mengubah nama properti pada object dengan destructuring
const {name:personName, age, city} = person;

console.log(personName);
console.log(age);
console.log(city);

// 3. destructuring dengan nilai default

const car = {
    brand : 'Toyota'
}

// pemberian nilai default pada object atau array
const {brand, model = 'Unknown'} = car;
console.log(model);

// 4. destructuring bersarang
const user = {
    id : 1,
    profile : {
        name : 'Ryn',
        umur : 19
    }
};

const {
    profile : {name, umur}
} = user;

console.log(umur);

// 5. rest parameter dalam destructuring

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(...rest);

const userDetails = {
    username : 'JohnDoe',
    email : 'johndoe@gmail.com',
    password : 12345
}

const {password, ...publicData} = userDetails;

console.log(publicData);


