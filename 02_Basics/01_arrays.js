//array

const arr=[1,4,5,6,7,8]    // 0th based indexing 

//array create Shallow Copy    share the same referene points


console.log(arr[0])

const arr1 = new Array(10,45,65,778,45);
console.log(arr1[0])
console.log(arr1.length)


console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);