// var, let
var number1 = 1;
var number2 = 2;
var number3 = 3;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        // console.log(i);
    }
    // console.log(`finall i = ${i}`);
}
doSomething();
// 3-3
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(number1, number2));
// 3-4, array, tupple
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var list3 = [1, 2, 3, 4];
var list4 = [1, 'add'];
var list5 = [1, 'dss', true];
var person1 = [1, 'JOJO'];
// person1[2] = 3;
// person1.push(3);
// union, literal
var union;
union = 2;
union = 'gogo';
// union=true
var union2;
function merge(n1, n2, resultType) {
    if (resultType === 'as-string') {
        return n1.toString() + n2.toString();
    }
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    else
        return n1 + n2;
}
var mergeNumber = merge(1, 2, 'as-number');
var mergeNumber2 = merge(1, 2, 'as-string');
var mergeString = merge('hello', 'world', 'as-string');
console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
