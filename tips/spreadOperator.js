const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const numbers = [...evenNumbers, ...oddNumbers];
console.log(numbers);

const person = {
  name: "Julia",
  age: 20,
};

const address = {
  country: "Korea",
  city: "Seoul",
};

const merge = { ...person, ...address };

console.log(merge);
console.log(merge.country);
