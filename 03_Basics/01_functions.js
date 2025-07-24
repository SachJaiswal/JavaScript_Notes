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


// function add2num(a,b)  //Parameters
// {
//     return a**b

// }
// console.log(add2num(5,5)) // add2num(5,5) input  is Arguments




// function add2num(a,b)  //Parameters
// {
//     return a**b
//     console.log("Sachin")   // Unreachable code detected.   After return no code is executed     

// }

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
console.log(loginUserName())    // Application Login By the Name undefined 