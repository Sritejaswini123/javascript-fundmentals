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
      