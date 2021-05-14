//default parameter Function
// function add(a:number,b:number=4){
//     console.log("Value of a is "+a);
//     console.log("Value of b is "+b);
//     console.log("Result of a+b is "+(a+b));
// }
// add(5);
// add(2,5);
function add1(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 4; }
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
    console.log("Result of a+b is " + (a + b));
}
// add1();
// add1(8,8);
add1(1, 0);
