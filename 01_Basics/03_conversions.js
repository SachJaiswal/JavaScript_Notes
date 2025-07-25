let score="Sachin"

console.log(typeof score)          //string
console.log(typeof(score));        //string


let numberedvalue = Number(score)

console.log(numberedvalue)       //NaN

console.log(typeof numberedvalue) // number
// let score=33        Number 
// let score="33abc"   NaN  not a number
// let score=true      1
// let score="Sachin"  NaN


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   //true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let n=33

let stringconv= String(n)
console.log(stringconv)             //33
console.log(typeof(stringconv))     //string 


/* Operations */
let value = 3
let negValue = -value
// console.log(negValue);      // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);    hello hitesh

console.log("1" + 2);         //12
console.log(1 + "2");         //12
console.log("1" + 2 + 2);     //122
console.log(1 + 2 + "2");     //32

console.log( (3 + 4) * 5 % 3); //2

console.log(+true);     // 1
console.log(+"");       // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);     //101
