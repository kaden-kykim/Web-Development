const animalPairs = [
    [ 'doe', [ 'buck', 'stag' ] ],
    [ 'ewe', 'ram' ],
    [ 'peahen', 'peacock' ]
];

console.log(animalPairs);
console.log(animalPairs[0]);
console.log(animalPairs[2][0]);
console.log(animalPairs[1][1]);

animalPairs[0][1] = 'stag';
console.log(animalPairs[0]);

// Tic-Tac-Toe board
const board = [
    [ 'O', null, 'X' ],
    [ null, 'X', 'O' ],
    [ 'X', 'O', null ]
];
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);