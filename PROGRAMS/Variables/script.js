/* var a = 10;
let b = 20;
const c = 30;
d = 40; */ // Implicit global variable

/*function vare()
{
    var x = 100;// Local variable
    y = 200;// Implicit global variable it can be accessed outside the function
    console.log(x, y);
}
vare();

console.log(x,y);// Error: x is not defined but y is accessible because it is implicitly global variable.

console.log(y);*/


/*function const()
{
    const x;// Local variable we must initialize const variable
    y = 200;// Implicit global variable it can be accessed outside the function
    console.log(x, y);
}
const();
*/


/*function var2()
{
    { // Block scope
        var x = 10;// var is function scoped
        let y = 20;// let is block scoped
        console.log(x, y);
    }
    console.log(x,y); // x is accessible because var is function scoped, but y is not accessible because let is block scoped
}
var2();*/



/*var i = 10;
var i = 20; // Redeclaration is allowed with var
console.log(i);*/

/*let i = 10;
let i = 20; // Redeclaration is not allowed with let
console.log(i);*/

/*var x= 10;
let y = 20; 
console.log(x,y);*/

///////////////////////////////////////////////////////////////////////////     Hoisting     ////////////////////////////////////////////////////////////////////////////////////

/* function f1()
{
    var a;
    console.log(a); // undefined due to hoisting
    a = 10;
}
f1(); */