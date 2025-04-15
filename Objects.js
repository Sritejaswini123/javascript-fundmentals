//OBJECTS

let user = { //user is an object 
    name : 'Sritejaswini ', //name is the key and sritejaswini is the value
    age:16,
    university : "RGUKT",
    "liked birds":"peackok" //multi word data
}
user.isadmin = true; //add boolean data
delete user.age; //delete data
user.age = 17; //add data
user["liked animals"] = "tiger" // we cannot use the dot for multi words so we will use the square
console.log(user);
console.log(user.name);
 


//For in loop
let user2 = {
    name : 'Aswini',
    age:222222,
    university : 'IIIT'

}
for(let key in user2){
    console.log(key);
    console.log(user2[key])
}


let user3 = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user3) {
    // keys
   console.log( key );  // name, age, isAdmin
 
    console.log( user3[key] ); // John, 30, true
  }