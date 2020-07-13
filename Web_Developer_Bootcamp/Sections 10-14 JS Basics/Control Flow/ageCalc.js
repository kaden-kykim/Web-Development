var age = Number(prompt("How old are you?"));
// var days = age * 365.25;
// alert(age + " year(s) is roughly " + days + "days.");

if (age < 0) {
  alert("Age must not be negative!");
} else if (age % 2) {
  alert("Your age is odd!")
  if (age === 21) {
    alert("Happy 21st Birthday!!");
  }
}

if (age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");  
}

// var div = 0;
// while (div < 50) {
//   div++;
//   if (div == (age / div)) {
//     alert("Your age is perfect square!");
//     break;
//   }
// }
