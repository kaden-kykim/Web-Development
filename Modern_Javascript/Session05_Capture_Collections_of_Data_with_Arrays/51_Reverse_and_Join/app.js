let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];

// reverse - modify itself
console.log(letters.reverse());
console.log(letters);
console.log([ 123, true, null, 'abc' ].reverse());

letters.reverse();

// join
console.log(letters.join());
console.log(letters.join('&'));
console.log(letters.reverse().join('.'));
console.log(letters.reverse().join('-'));
console.log(letters.reverse().join('-'));

console.log([ 12.3, 60, false ].join());
console.log([ 12.3, 60, false ].join(' # -> '));
