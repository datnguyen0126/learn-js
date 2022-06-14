// Promises
// 3 states: pending, fulfilled, rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Resolved promise");
  } else {
    reject("Rejected promise");
  }
});

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Next Promise resolved!");
  }, 3000);
});

myPromise2.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});

// Async / await
