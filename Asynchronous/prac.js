const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

promise1
  .then(function () {
    console.log("Promise1 resolved");
  })
  .catch(function () {
    console.log("Promise1 rejected");
  })
  .finally(function () {
    console.log("Promise1 is either resolved or rejected");
  });

//OR

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve(1 + 2);
    } else {
      reject("The promise was rejected");
    }
  }, 1000);
});

async function consumePromise2() {
  try {
    const resolve = await promise2;
    console.log(resolve);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Promise2 is either resolved or rejected");
  }
}

consumePromise2();
// so in promise1 we used traditional .then() .catch() to handle the resolution and rejection of the promise and in promise 2 we used modern async/await to handle resolution and the rejection of the promise.

//--------------------------------------------------------------------------------------------------------

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error occured!");
  } finally {
    console.log("The fetch was either sucessful or failed!");
  }
}
getData();

(async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(typeof response);
    const data = await response.json();
    console.log(data);
    console.log(typeof data);
  } catch (error) {
    console.log("Error occured!");
  } finally {
    console.log("The fetch was either sucessful or failed!");
  }
})();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    let data = response.json();
    return data;
  })
  .then(function (userData) {
    console.log(userData);
    console.log(typeof userData);
  })
  .catch(function () {
    console.log("Error");
  })
  .finally(function () {
    console.log("Fetch was successful or failed/ERROR");
  });
