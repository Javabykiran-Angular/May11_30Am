
// identifier
//in core java => start with charcter
//_ $
//we can't use special keyword & white spaces
//core java => int a1;

var a1;
var a_1;
var a$1;
var a2,b2;
/* */
//data type

// number(int,float,double,long,short), string(string,char)=>"a" or 'a', 
// boolean (true,false),any (number,string,boolean),void(it does not point any thing)
// misec. data available in typescript => null & undefined

var b1:number=10;  //Forward declaration & defination.

// console.log('Value of b1 is '+b1);

var b3:string='Sumit Raokhande';
// console.log("Value of b3 is "+b3);

var b4:any='Sumit';
// console.log("Value of b4 is "+b4);
b4=2.5;
// console.log("Value of b4 is "+b4);
b4=true;
// console.log("Value of b4 is "+b4);
b4=3.5,true;
// console.log('Value of b4 '+b4);

var b5:number;
// console.log('Value Of b5 '+b5);

var b6;
var b7='Sumit';

//Type Assertion => is same like your typecasting 
 

var str:any;
// u can achieve type assertion in two ways
 // 1 use Angle Bracket syntax
 // 2 use as syntax

 // 1 Angle Bracket
 var temp=(<string> str);  //most reconmendaded angular
//  temp.

//2 use as syntax

var temp1=(str as string);
// temp1.

//Operator
// Bitwise operator (<<,>>, !,& ,|,^ )
// Arithemathic (+,-,/,*,%)
// Logical (&&,||,!=,==)
// relational (<,>, <=,>= )
// Assignment (=,+=,-=,&=)
// increment & decrement => pre/post (++,--),++a,--a,a++,a--
// unary (\)
// ternary oprator (condition?expression1:expression2)




