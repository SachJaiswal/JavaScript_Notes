var c =300
let a =40
if(true){
    let a = 23
    const b = 50
    var c =30
}
// console.log(a);  // ReferenceError: a is not defined
// console.log(b);  // ReferenceError: a is not defined

console.log(c);
console.log(a);   // 40   because global let a =40

// Nested Function 
// child function can access parent function   Closure
function one (){
    const userName = "Sachin"
    function two(){
        const password ="12345"
        console.log(userName)
    }
    // console.log(password);    // not accessable for one()
    
    two()
}
one()


// Technique to Define Function 

// function addone(num) {
//     return num+1
// }
// addone(5)

// const addTwo = function(num){
//     return num+2
// }

// addTwo(5)

addone(5)    // Properly works
function addone(num) {
    return num+1
}


// addTwo(5)        // Cannot access 'addTwo' before initialization   because of the const variable defined 
const addTwo = function(num){
    return num+2
}



