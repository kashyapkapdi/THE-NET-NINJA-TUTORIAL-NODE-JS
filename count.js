let counter = (count) => {
  console.log(`There are ${count.length} elements in this array`);
};

// if you want to export any functionality form this file to another file then this line of code is necessary.
module.exports = counter;
