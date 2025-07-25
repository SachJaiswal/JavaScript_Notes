// this refer to current context

const user ={
    userName:"Sachin",
    age:"21",

    welcomemsg : function() {
        console.log(`${this.userName} welcome to Thane`)
        console.log(this);
    }
}

// user.welcomemsg()
// user.userName="Abhishek"
// user.welcomemsg()

// console.log(this);

//  3 ways to define function

function one(){
    let userName="Sachin"
    console.log(this.userName);     // undefined
}
// one()


const one1 = function(){
     let userName="Sachin"
    console.log(this.userName);     // undefined
}

// one1()


const one2 =  () => {
     let userName="Sachin"
    console.log(this.userName);     // undefined
}

one2()

// Explicit 
const addTwo = (num1,num2) =>{
    return num1 + num2
} 
console.log(addTwo(3,4))

// Implicit 
const addTwo1 = (num1,num2) =>  num1 + num2
console.log(addTwo1(3,4))


const addTwo2 = (num1,num2) =>  ( num1 + num2 )
const addTwo3 = (num1,num2) =>  ({userName:"Sachin"})











