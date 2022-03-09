// var, let
var number1 = 1;
let number2 = 2;
const number3 = 3;
function doSomething() {
  for (var i = 0; i < 5; i++) {
    // console.log(i);
  }
  // console.log(`finall i = ${i}`);
}

doSomething();

// 3-3
function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(number1, number2));
