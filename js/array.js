const myArray = ["Dave", 1001, false, 21, 23];

// const newArr = myArray.unshift(42);

// const newArr = myArray.splice(1, 1);

const newArr = myArray.slice(1, 4);

console.log(newArr);
console.log(myArray);
console.log(...myArray);

const makeError = () => {
  try {
    throw new Error("This is Error!");
  } catch (err) {
    console.error(err);
  }
};
makeError();

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}
