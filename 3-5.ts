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

// union, literal
let union: string | number;
union = 2;
union = 'gogo';
// union=true

let union2: string | number | boolean | string[];

function merge(
  n1: number | string,
  n2: number | string,
  resultType: 'as-number' | 'as-string'
) {
  if (resultType === 'as-string') {
    return n1.toString() + n2.toString();
  }
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  } else return n1 + n2;
}

let mergeNumber = merge(1, 2, 'as-number');
let mergeNumber2 = merge(1, 2, 'as-string');
let mergeString = merge('hello', 'world', 'as-string');

console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
