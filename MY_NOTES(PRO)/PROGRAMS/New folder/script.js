let username = "Abirlal";//let : It is a block scoped variable. It means it can be accessed within the block it is defined.
let lastName = "Bera";
let age = 25;
let a = undefined;
let isStudent = true;
let Intro = `Hello, my name is`+ ` ` + username + ` ` + lastName + ` `+`My age is ` + age + `.`;

console.log(Intro);

var city = "Kolkata";//var : It is a function scoped variable. It means it can be accessed within the function it is defined.
var country = "India";
var pincode = 700091;
var isEmployed = false;
var address = `I live in ` + city + `, ` + country + ` - ` + pincode + `.`;
console.log(address);

const pi = 3.14;//const : It is a block scoped variable. It means it can be accessed within the block it is defined. Its value cannot be changed.
const gravity = 9.8;
const speedOfLight = 299792458;
const physicsConstants = `Some important physics constants are: Pi = ` + pi + `, Gravity = ` + gravity + ` m/s², Speed of Light = ` + speedOfLight + ` m/s.`;
console.log(physicsConstants);  