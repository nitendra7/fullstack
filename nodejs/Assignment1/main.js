const greet = require('./greetings');
const { add, subtract, multiply, divide } = require('./mathOperations');

const name = 'Nitendra';
const greeting = greet(name);
console.log('Greeting:', greeting);

const a = 10;
const b = 5;

console.log('Add:', add(a, b));
console.log('Subtract:', subtract(a, b));
console.log('Multiply:', multiply(a, b));
console.log('Divide:', divide(a, b)); 