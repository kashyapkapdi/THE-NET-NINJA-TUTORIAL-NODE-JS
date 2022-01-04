let counter = (count) => {
  console.log(`There are ${count.length} elements in this array`);
};

let addition = (a, b) => {
  console.log(`The sum of two number is: ${a + b}`);
};

let pi = 3.142;

module.exports.counter = counter;
module.exports.addition = addition;
module.exports.pi = pi;
