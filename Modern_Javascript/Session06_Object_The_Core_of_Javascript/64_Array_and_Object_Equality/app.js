let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];

let moreNums = nums;

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};

// Not going to work!!
// if (user.notifications === []) {
// It works!!
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICIATION');
}
