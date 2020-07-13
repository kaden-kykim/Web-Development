function printReverse(array) {
  // var revArr = array.reverse();
  // revArr.forEach(function(elem) {
  //   console.log(elem);
  // });

  for (var i = array.length - 1; i >= 0; --i) {
    console.log(array[i]);
  } 
}

function isUniform(array) {
  var comp = array[0];
  var ret = true;
  array.forEach(function(elem) {
    if (comp !== elem) {
      ret = false;
    }
  });
  return ret;
}

function sumArray(array) {
  var sum = 0;
  array.forEach(function(elem) {
    sum += elem;
  });
  return sum;
}

function max(array) {
  var max = array[0];
  array.forEach(function(elem) {
    if (max < elem) {
      max = elem;
    }
  });
  return max;
}