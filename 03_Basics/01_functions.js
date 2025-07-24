// Functions And Parameters 
// Function is a Package 



function saymyname(){
    console.log("SACHIN")
    console.log("SACHIN")
    console.log("SACHIN")
    console.log("SACHIN")
    console.log("SACHIN")
    console.log("SACHIN")
}

// saymyname   is reference 
// ()   these is the execution 
// saymyname()


function add2num(a,b)  //Parameters
{
    return a**b

}
// console.log(add2num(5,5)) // add2num(5,5) input  is Arguments




function add2num(a,b)  //Parameters
{
    return a**b
    console.log("Sachin")   // Unreachable code detected.   After return no code is executed     

}

// const result = add2num(5,5)
// console.log(result) // add2num(5,5) input  is Arguments



function loginUserName(username){
    if(username === undefined){
        console.log("Please Enter Username")
        return
    }
    return `Application Login By the Name ${username} `               // undefined
}

// console.log(loginUserName("Sachin"))
// console.log(loginUserName())    // Application Login By the Name undefined 


/* --------------------------------------  */


//  ...variable    is called the rest operator we can take multiple arguments 
function calculateCartPrice1(...num1){
    return num1
}

//  console.log(calculateCartPrice(100,233,700))    // Output :  [ 100, 233, 700 ]



function calculateCartPrice2(var1,var2,...num1){
    return num1
}

// console.log(calculateCartPrice2(100,233,700,2000))   

// Output : [ 700, 2000 ]    var1 = 100, var2 = 233 and rest into num1 


const user = {
    userName : "Sachin",
    age : 21
}

function handleObject(anyObjects){
    return `My name is ${anyObjects.userName} and age is ${anyObjects.age} `
}

console.log(handleObject(user))

// passed object directly 
console.log(
 handleObject({
    userName : "Jaiswal",
    age:41
}))


// Passed Array

const arr=[100,200,300,400]

function returnSecondValue(anyObjects){
    return anyObjects[1]
}
console.log(returnSecondValue(arr));
