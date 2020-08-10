let num = 7;
if (num === 7) {
    console.log('lucky!');
} else {
    console.log('BAD!');
}

num === 7 ? console.log('lucky!') : console.log('BAD!');
console.log(num === 7 ? 'lucky!' : 'BAD!');

let status = 'offline';

let color;
if (status == 'offline') {
    color = 'red';
} else {
    color = 'green';
}

color = status === 'offline' ? 'red' : 'green';
console.log(color);
