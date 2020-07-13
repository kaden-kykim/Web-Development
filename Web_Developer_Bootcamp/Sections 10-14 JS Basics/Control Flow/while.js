alert("CONNECTED!");

var counter = -10;
console.log("Print all numbers between -10 and 19");
while (counter < 20) {
  console.log(counter++);
}

console.log("Print all even numbers between 10 and 40");
counter = 10;
while (counter <= 40) {
  console.log(counter);
  counter += 2;
}

console.log("Print all odd number between 300 and 333");
counter = 300;
while (counter <= 333) {
  if (counter % 2) {
    console.log(counter);
  }
  counter++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
counter = 5;
while (counter <= 50) {
  if (counter % 5 === 0 && counter % 3 === 0) {
    console.log(counter);
  }
  counter++;
}