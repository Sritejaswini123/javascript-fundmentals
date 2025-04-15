//if
let a =10;
if (a>=5) {
    console.log("a is greater");
}
// if else
let x = 100;
let y = 20;

if (x > y) {
    console.log("x is greater than y");
}
else {
    
    console.log("y is greater than x");
}

//else if 

const  size =100;
if (size > 50) {
    console.log("size is greater than 50");

}
else if (size < 50) {
    console.log("size is less than 50");

}
else {
    console.log("size is equal to 50");
}

//conditional (ternary) operator
let age = 18;
let message = (age >= 18) ? "You will vote" : "You will not vote";
console.log(message);


//switch
let day = 2;
switch (day) {
    
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//while loop : This loop checks the condition first, and executes the code block only if the condition is true.
let i = 0;
while(i<5){
    console.log("the while of i is ", i);
    i++;
}

//do while loop : This loop executes the code block first,
//  and then checks the condition. It will always execute the code block at least once, even if the condition is false.
let j = 0;
do{
    console.log(  "the do while of j is ", j);
    j++;
}
while(j<5);

//for loop : This loop is used when you know the number of iterations in advance.
for(let k = 0; k<5; k++){
    
    console.log("the for  loop of k is ", k);

}
