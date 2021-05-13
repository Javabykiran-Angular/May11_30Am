var temp = function (a, b) {
    console.log('in function ');
    return (a + b);
};
// console.log(`
// Addition is ${temp(2,3)}
// `);
// optional parameter Function
function add2(a, b) {
    console.log("Value of a is " + a); //2
    console.log("Value of b is " + b); // undefined 
    console.log("Addition is " + (a + b)); // NAN=> Not a number
}
// add2(2);
add2(2, 4);
