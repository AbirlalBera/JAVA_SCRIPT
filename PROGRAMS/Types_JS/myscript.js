var a = 10;
let b = 20;
const c = 30;
d = 40; // Implicit global variable

function f1()
{
    var x = 100;// Local variable
    y = 200;
    console.log(x, y);
}

f1();

console.log(x,y);