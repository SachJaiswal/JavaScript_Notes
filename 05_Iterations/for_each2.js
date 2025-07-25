
const arr=['js','cpp','py','java']


arr.forEach(element => {
    console.log(element);
});

// Aother Way
// function printme(items){
//     console.log(items);
// }

// arr.forEach(printme)

arr.forEach((item,index,arr)=>{
    console.log(item,index,arr);

    //Output
    // js 0 [ 'js', 'cpp', 'py', 'java' ]
    // cpp 1 [ 'js', 'cpp', 'py', 'java' ]
    // py 2 [ 'js', 'cpp', 'py', 'java' ]
    // java 3 [ 'js', 'cpp', 'py', 'java' ]  
})


const myarr =[
    {
        language: 'java',
        languageext:'java'
    },
    {
        language: 'C++',
        languageext:'cpp'
    },
    {
        language: 'javascript',
        languageext:'js'
    }
]

myarr.forEach(element => {
    console.log(`${element.language}  == ${element.languageext}`);   

});
//output 
// java  == java
// C++  == cpp
// javascript  == js



// forEach  Doesnot return the value 