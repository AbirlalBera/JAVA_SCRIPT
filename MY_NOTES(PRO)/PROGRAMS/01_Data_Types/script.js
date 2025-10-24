//STRING
console.log('Hello');
console.log(typeof 'Hello'); //string output = string

console.log("Hello World");
console.log(typeof "Hello World"); //string output = string

//STRING TO NUMBER
console.log(+'123');
console.log(typeof Number('123')); //number output = 123

console.log(Number('456'));
console.log(typeof Number('456')); //number output = 456

console.log(parseInt('456abcd'));
console.log(typeof parseInt('456abcd')); //number output = 456

console.log(parseInt('asas456abcd'));
console.log(typeof parseInt('asas456abcd')); //number output = NaN


//NOT A NUMBER
console.log(Number('Hello'));
console.log(typeof Number('Hello')); //number output = NaN

//NUMBER TO STRING
console.log(123 + '');
console.log(typeof (123 + ''));//string output = '123'

console.log(123 + 'add me');
console.log(typeof (123 + 'add me'));//string   output = '123add me'

//BOOLEAN 
console.log(Boolean(1));
console.log(typeof Boolean(1));//boolean output = true

console.log(Boolean(0));
console.log(typeof Boolean(0));//boolean output = false

console.log(Boolean('Hello'));
console.log(typeof Boolean('Hello'));//boolean output = true

console.log(Boolean(''));
console.log(typeof Boolean(''));//boolean output = false

console.log(Boolean(null));
console.log(typeof Boolean(null));//boolean output = false

console.log(Boolean(undefined));
console.log(typeof Boolean(undefined));//boolean output = false

//BOOLEAN TO NUMBER
console.log(Number(true));
console.log(typeof Number(true));//number output = 1

console.log(Number(false));
console.log(typeof Number(false));//number output = 0

//UNDDEFINED 

console.log(undefined);
console.log(typeof undefined);//undefined output = undefined

//NULL
console.log(null);
console.log(typeof null);//object output = null

//NULL TO NUMBER
console.log(Number(null));
console.log(typeof Number(null));//number output = 0

//NULL TO STRING
console.log(String(null));
console.log(typeof String(null));//string output = 'null'

//NULL TO BOOLEAN
console.log(Boolean(null));
console.log(typeof Boolean(null));//boolean output = false

//BIGINT 
//Defination: BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1.
console.log(123n);
console.log(typeof 123n);//bigint output = bigint

//BIGINT TO STRING
console.log(BigInt(123));
console.log(typeof BigInt(123));//bigint output = bigint 

