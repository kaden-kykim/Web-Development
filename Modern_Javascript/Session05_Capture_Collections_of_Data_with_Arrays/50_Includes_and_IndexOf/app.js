let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

// includes
console.log(ingredients.includes('fish'));
console.log(ingredients.includes('shrimp'));
console.log(ingredients.includes('corn'));

// includes with startIndex
console.log(ingredients.includes('water', 3));
console.log(ingredients.includes('water', 0));

if (ingredients.includes('flour')) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

// indexOf
console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syrup'));

// indexOf with startIndex
console.log(ingredients.indexOf('cheese', 5));
console.log(ingredients.indexOf('cheese', 2));

if (ingredients.indexOf('flour') !== -1) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}