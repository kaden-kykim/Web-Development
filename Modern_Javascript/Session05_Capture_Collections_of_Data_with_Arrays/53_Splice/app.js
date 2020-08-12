let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

console.log(animals.splice(1));
console.log(animals);

animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
console.log(animals.splice(1, 0));
console.log(animals);

animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
console.log(animals.splice(1, 0, 'octopus'));
console.log(animals);

console.log(animals.splice(3, 2));
console.log(animals);

console.log(animals.splice(3, 0, 'snake', 'frog'));
console.log(animals);

console.log(animals.splice(0, 2, 'SHARK!', 'OCTOPUS!'));
console.log(animals);