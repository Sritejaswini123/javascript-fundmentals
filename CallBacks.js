function sayHello(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  sayHello("Alice", sayGoodbye);
  //Another way to call the callback function

  function add(a,b , callback){
console.log(a+b);
callback();
  }
  function AddedData(){
      console.log("Data Added")

  }
  add(10,20,AddedData);



  //Promises 
  //When promises are resolved
  let promise = new Promise((resolve, reject) => {
      setTimeout(() =>  resolve("Promise resolved"),2000)
 
  })
  promise.then((result) => console.log(result)),
   (error) => console.log(error);


   //When promises are rejected 
   let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise rejected"), 3000);
  });
  
  promise2
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  
    //Another example for the promises
    //Login user function
 function loginUser(username, password) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "tejaswini" && password === "1234") {
              resolve("Login successful!");
            } else {
              reject("Invalid credentials");
            }
          }, 2000);
        });
      }
      //Calling the function and promises
      loginUser("tejaswini", "1234")
      .then((message) => {
        console.log(message);
        // Return another promise to chain
        return new Promise((resolve) =>
          setTimeout(() => resolve("Fetching user data..."), 1000)
        );
      })
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Login attempt finished ");
      });
          

      //Promise Chaining
      //Chaining promises is a way to handle multiple promises in a sequence. 
      // It is a way to execute a series of asynchronous operations one after the other.

    
      new Promise((loginSuccess, loginFailed) => {
        setTimeout(() => loginSuccess("Step 1: Login successful "), 3000);
      })
        .then((loginMessage) => {
          console.log(loginMessage);
          return "Step 2: Fetching user profile...";
        })
        .then((profileMessage) => {
          console.log(profileMessage);
          return new Promise((dashboardReady) =>
            setTimeout(() => dashboardReady("Step 3: Dashboard loaded "), 3000)
          );
        })
        .then((dashboardMessage) => {
          console.log(dashboardMessage);
        })
        .catch((error) => {
          console.log("Something went wrong:", error);
        });
      
        //Stsatic methods in Promise API
        //Promise.all() method -  Waits for all promises to fulfill, or rejects immediately on the first rejection.
        const p1 = Promise.resolve(1);
        const p2 = Promise.resolve(2);
        const p3 = Promise.resolve(3);
        const p4 = Promise.reject("Error");
        
        Promise.all([p1, p2, p3]).then(console.log); 
        Promise.all([p1, p2, p4]).catch(console.log)

        //Promise.allSettled(promises) - Waits for all promises to settle, regardless of whether they are fulfilled or rejected, returns an array of results.
       
        const a = Promise.resolve("ok");
        const b = Promise.reject("error");
        Promise.allSettled([a, b]).then(console.log)


        //Promise.resolve 
        Promise.resolve("Hey Tezz").then(console.log);
        //Promise.reject
        Promise.reject("Something went wrong").catch(console.log);

        //Promise.race() -  Settles (fulfills/rejects) as soon as the first promise settles.
        const slow = new Promise(res => setTimeout(() => res('Slow'), 1000));
        const fast = new Promise(res => setTimeout(() => res('Fast'), 100));
        Promise.race([slow, fast]).then(console.log);


        //async/await
        function wait(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        async function sayHello() {
          console.log(" Waiting...");
          await wait(1000); // waits 1 second
          console.log("👋 Hello after 1 second!");
        }
        
        sayHello();
        

        
//Spread and Rest operators
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1,6,7,8,9,10];
console.log(arr2);

//Rest Operator
const [FIRST , ...REST] = [1,2,3,4,5]
console.log(REST)