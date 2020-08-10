let loggedInUser;

// If there isn't a logged in user
if (!loggedInUser) {
    console.log('GET OUT OF HERE');
}

let flavor = 'grape';

if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log('WE DON\'T HAVE THAT FLAVOR!');
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('WE ONLY HAVE GRAPE AND CHERRY!');
}