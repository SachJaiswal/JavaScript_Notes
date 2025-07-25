// Immediately Invoked Function Expression


(function one(){
    //Named IIFE
    console.log("Db COnnected");
})();

(() => {
    // un named  iife
    console.log("Db COnnected2");
})();

((name) => {
    console.log(`Db COnnected2 ${name}`);
})("Sachin")











