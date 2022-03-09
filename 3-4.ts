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

// 3-4, array, tupple
let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3, 4];
let list3 = [1, 2, 3, 4];

let list4 = [1, 'add'];
let list5: any[] = [1, 'dss', true];

let person1: [number, string] = [1, 'JOJO'];
// person1[2] = 3;
// person1.push(3);
