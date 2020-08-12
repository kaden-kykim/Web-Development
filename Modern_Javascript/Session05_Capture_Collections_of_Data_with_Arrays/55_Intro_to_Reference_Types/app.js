// Value Type Variable
let fruit = "orange";
let color = fruit;
console.log(color);
console.log(fruit);

fruit = "watermelon"
console.log(fruit);

// Reference Type Variable
let nums = [ 5, 6, 7, 8 ];
let otherNums = nums;

nums.push(9);
console.log(nums);
console.log(otherNums);

otherNums.pop();
otherNums.pop();
otherNums.pop();
console.log(nums);
console.log(otherNums);

