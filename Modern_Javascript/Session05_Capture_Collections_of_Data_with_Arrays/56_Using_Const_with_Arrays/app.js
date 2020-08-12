// Variable
let x = 34;
x += 5;
console.log(x);

// Constant
const PI = 3.141592;
console.log(PI);

const city = "Lisbon";
console.log(city);
// city = "London"; // Error: Assignment to variable

// Const with Arrays
const myEggs = [ 'brown', 'brown' ];
console.log(myEggs);
myEggs.push('purple');
myEggs[0] = 'green';
console.log(myEggs);
// myEggs = [ 'blue', 'pink' ]; // Error: Assignment to variable

const foods = [ 'milk' ]
foods.push('chocolate');
foods.unshift('tortillas')
console.log(foods);
console.log(foods.pop());
console.log(foods.pop());
console.log(foods.pop());
console.log(foods);
// foods = []; // Error: Assignment to variable