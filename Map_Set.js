
//map methods 
//set() - adds or update  a new element to the map
let mymap = new Map();
mymap.set('name','saurabh');
mymap.set('age',20);
mymap.set('city','delhi');
console.log(mymap);
 //get() - returns the value of the specified key
console.log(mymap.get('name')); 
console.log(mymap.get("city"))
//has() - returns true if the specified key is present in the map
console.log(mymap.has('name'));

//delete() - removes the specified key from the map
console.log(mymap.delete('age'))
console.log(mymap);

//clear() - removes all the elements from the map
mymap.clear();
console.log(mymap);


//Looping over the map has the three methods 
//map.keys(), //map.values(), map.entries()

let reciepe = new Map();
reciepe.set("mango", 100);
reciepe.set("banana", 200);
reciepe.set("apple", 300);
reciepe.set("grapes", 400);
//map.keys()
for (let fruits of reciepe.keys()){
    console.log(fruits);
}


//map.values()
for(let amount of reciepe.values()){
    console.log(amount);
}

//map.entries()
for(let [fruit,amount] of reciepe.entries()){
    console.log(fruit,amount);
}

//Convert an Object to a Map using Object.entries()
const User = {
    name: 'Aurabh',
    age: 20,
    city: 'Delhi'
}
const userMap = new Map(Object.entries(User));
console.log(userMap);

//Convert a Map to an Object using Object.fromEntries()
const userMap2 = new Map([
    ['name', 'Tejaswini'],
    ['age', 22],
  ]);
  
  const userObj = Object.fromEntries(userMap2);
  console.log(userObj);



  //SET
  let set = new Set();
  set.add(1); //add value
  set.add(2);
  set.add(3);
  set.add(4);
  set.add(5);
  set.add(5);//// won't be added again (duplicate)
  set.delete(5); //delete value
  console.log(set);
  console.log(set.has(10)); 


let colors = new Set(["red", "green", "blue"]);
console.log(colors.size);
for (let color of colors) {
    console.log(color); 
  }
  colors.forEach(color => console.log(color));



  //object Destructing : Destructuring makes it easy to unpack values from arrays or objects into variables 
  const person = {
    Personname: 'tezz',
    age: 12,
    city: 'mexico'
  }
  const { Personname,age,city} = person;
 console.log(Personname);

 //Array Destructuring
 const arr = [1,2,3,4,5];
 const [a,b,c,d,e] = arr;
 console.log(a);


 //Date and time
 const date = new Date();
 console.log(date);