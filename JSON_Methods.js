
 //Date and time
 const date = new Date();
 console.log(date);

 //specific date and time
 const specificDate = new Date("2023-10-15T10:30:00");
console.log(specificDate); 

//using yearly monthly
const customDate = new Date(2025, 6, 15, 10, 30); 
console.log(customDate);


//JSON.stringify() method
const person = {
  name: "John",
  age: 30,
  city: "New York"

}
const personJSON = JSON.stringify(person);
console.log(personJSON);


//JSON Parse() method
const jsonString = '{"name":"John", "age":30, "city":"New York"}';
const personObject = JSON.parse(jsonString);
console.log(personObject);


