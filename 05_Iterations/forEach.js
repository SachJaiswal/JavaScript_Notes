// for of

//const  arr =[1,2,3,4]

const arr="Sachin"

for (const val of arr) {
    console.log(val);
}



// Maps
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete("b");

console.log(map.size);
// Expected output: 2

// destructure
// for of
for (const [key,value] of map) {
    console.log(`${key}  and  ${value}`);
}


const myObjects ={
    "js":"javascript",
    "cpp":"c++"
}

// for in loop
for (const key in myObjects) {
   console.log(`${key}   ===  ${myObjects[key]}`);
}

