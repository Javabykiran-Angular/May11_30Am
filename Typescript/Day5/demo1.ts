
// custom (user defined) Functions has basic 4 types
// 1 functions without argument/parameter & without Return Type
// 2 functions with argument/parameter & without Return Type
// 3 functions without argument/parameter & with return type
// 4 functions with argument/parameter & with return type

// 1 functions without argument/parameter & without Return Type

// add1();

    function add1(){
        console.log("Addition is "+(2+5));
    }

    // 2 functions with argument/parameter & without Return Type

    function add2(a:number,b:number){
        console.log(`
        Addition is ${a+b}
        `);
    }

    // add2(4,5);

    // 3 functions without argument/parameter & with return type

    function add3():number
    {
        return (8+8);
    }

    var res1=add3();

    // console.log("Result is "+res1);

    function add4():string
    {
        return ("8+8"+" Sumit");
    }

    var res2=add4();

    // console.log("Result is "+res2);

    // 4 functions with argument/parameter & with return type

    function add5(a:number,b:number):number{
        return (a+b);
    }


    console.log(`
            Addition is ${add5(7,7)}
    `);

    
 

