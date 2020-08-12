let dishesToDo = [];

dishesToDo.unshift('fork', 'knife');
dishesToDo.unshift('small spoon');
dishesToDo.unshift('large spoon');
console.log(dishesToDo);

dishesToDo.push('platter');
dishesToDo.push('cutting board', 'cookie sheet');
console.log(dishesToDo);

let firstDish = dishesToDo.shift();
console.log(firstDish);
let lastDish = dishesToDo.pop();
console.log(lastDish);