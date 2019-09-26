alert("Connected! Use Console!");

function isEven(number) {
  return !(number % 2);
}

function factorial(number) {
  var ret = 1;

  if (typeof number !== "number") {
    return "Input is not a number";
  }

  for (; number > 1; --number) {
    ret *= number;
  }

  return ret;
}

function kebabToSnake(string) {
  return string.replace(/-/g, "_");
  // return string.split("-").join("_");
}