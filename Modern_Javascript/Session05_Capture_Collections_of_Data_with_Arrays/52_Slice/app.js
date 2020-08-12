let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 4);
console.log(mammals);

let reptiles1 = animals.slice(4, 6);
let reptiles2 = animals.slice(4);
console.log(reptiles1);
console.log(reptiles2);

let quardruped1 = animals.slice(-3);
let quardruped2 = animals.slice(-3, -1);
console.log(quardruped1);
console.log(quardruped2);

let copy = animals.slice();
console.log(copy);