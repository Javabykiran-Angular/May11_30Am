// custom (user defined) Functions has basic 4 types
// 1 functions without argument/parameter & without Return Type
// 2 functions with argument/parameter & without Return Type
// 3 functions without argument/parameter & with return type
// 4 functions with argument/parameter & with return type
// 1 functions without argument/parameter & without Return Type
// add1();
function add1() {
    console.log("Addition is " + (2 + 5));
}
// 2 functions with argument/parameter & without Return Type
function add2(a, b) {
    console.log("\n        Addition is " + (a + b) + "\n        ");
}
// add2(4,5);
// 3 functions without argument/parameter & with return type
function add3() {
    return (8 + 8);
}
var res1 = add3();
// console.log("Result is "+res1);
function add4() {
    return ("8+8" + " Sumit");
}
var res2 = add4();
// console.log("Result is "+res2);
// 4 functions with argument/parameter & with return type
function add5(a, b) {
    return (a + b);
}
console.log("\n            Addition is " + add5(7, 7) + "\n    ");
