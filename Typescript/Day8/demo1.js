//for each loop
var a1 = [2, 3, 4, 5];
// a1.forEach((myvalue,i)=>{
//     if(i==0 || i==1){
//         console.log("Array Value is "+myvalue+" And Index is "+i);
//     }
// });
//push & pop
//Splice method
//push & pop
// var a2:number[]=[];
// // LIFO=> Last in first out
// a2.push(12);
// console.log(a2);
// a2.push(22);
// console.log(a2);
// a2.push(32,30,45);
// console.log(a2);
// var temp=a2.pop();
// console.log(a2);
// console.log("Poped Value is "+temp);
//Splice Method
var a3 = [11, 22];
// console.log("Original Array "+a3);
// a3.splice(1,0,24);
// console.log(a3);
// a3.splice(1,0,77,88,2);
// console.log(a3);
// a3.splice(2,1);
// console.log(a3);
// a3.splice(1,2);
// console.log(a3);
// a3.splice(1,1,55);
// console.log(a3);
// a3.splice(1,2,78,98);
// console.log(a3);
//slice => To copy a data from array of particular location 
//start location to end location
var a4 = [11, 12, 13, 14, 15, 66, 7, 3, 89];
var res = a4.slice(1, 5);
console.log("Original array " + a4);
console.log("Copied array " + res);
var res1 = a4.slice(1);
console.log("Copied array " + res1);
