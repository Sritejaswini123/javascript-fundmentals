let arr = [11, 12, 45,22,1 ]
arr.push(100) //add element at the end of the array
arr.push(200, 1)
arr.pop(1) //remove element from the end of the array
arr.shift() //remove element from the start of the array
arr.unshift(66) //add element at the start of the array
console.log(arr)


//Mapping refers to transforming each element of an array into a new value using the .map() method.
// It returns a new array of the same length with the transformed values.
//Syntax: array.map((element, index) => {
    // return new value});
  const users = [
    { name: "John", age: 30, },
    {name: "Jane",age: 25, },
    {name: "Bob", age: 35 }
  ]
  const names = users.map(user => user.name) 
      
  const ages = users.map(user => user.age)
  console.log(names)
  console.log(ages)


  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(number => number *2)
  reverse = numbers.reverse()
  console.log(doubled);
  console.log(reverse);
  
  let lengths = ["Bilbo", "Gandalf", "Nazgul"]
  let ItemLengths = lengths.map(item =>item.length)
  console.log(ItemLengths)