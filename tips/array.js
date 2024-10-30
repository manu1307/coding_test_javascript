const arr = new Array(6).fill(0);

console.log(arr);

const arr2 = [...new Array(3)].map((_, i) => new Array(3).fill(i));
console.log(arr2);
