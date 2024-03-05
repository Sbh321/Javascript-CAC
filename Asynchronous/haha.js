new Promise(function (resolve, reject) {
  error = false;
  if (!error) {
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  } else {
    reject();
  }
})
  .then(function () {
    console.log("b");
  })
  .catch(function () {
    console.log("Something went wrong");
  })
  .finally(() => {
    console.log("The promise was either resolved rejected");
  });

const promise2 = new Promise(function (resolve, reject) {
  error = true;
  if (!error) {
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  } else {
    reject();
  }
});

async function handlePromise2() {
  try {
    const haha = await promise2;
    console.log("b");
  } catch {
    console.log("Something went wrong");
  } finally {
    console.log("The promise was either resolved or rejected");
  }
}

handlePromise2();
