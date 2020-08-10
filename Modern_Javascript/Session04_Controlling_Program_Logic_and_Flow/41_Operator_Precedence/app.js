// Reference site: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x = 7;
// AND run first, then OR => true
console.log(x == 7 || x === 3 && x > 10);
// Parenthesis => highest precedence => false
console.log((x == 7 || x === 3) && x > 10);
