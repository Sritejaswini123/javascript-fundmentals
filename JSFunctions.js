//Functions
//Named Function - A function that is declared using the function keyword
function greet() {
    console.log("Hello World");
}
greet();

function add(num1, num2) {
    console.log(num1 + num2)

}
add(10, 20);
//function expression
const greet1 = function () {
    console.log("hi this is tejaswini")
}
greet1();

//Arrow Function are mostly used for the functions 
const Arrow = () => {
    console.log("hi this is arrow function")
}
Arrow();
//Short Arrow Function
const x = () => console.log("hi this is short arrow function")
x();

//Multiline arrow function
let sum = (a, b) => {
    let result = a + b;
    return result;
}
console.log(sum(880, 20));

//call back function
 fetchData = (callback) => {
    setTimeout(() => {
        console.log("fetching data")
        callback();
        },5000);
 }
 function displayData() {
    console.log(" data is displayed")
 }
fetchData(displayData);
