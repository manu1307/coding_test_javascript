// 값을 교환하는 로직

let a = 5;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log(a, b); // 10 5

// ES6의 구조 분해 할당을 사용하면 더 간단하게 값을 교환할 수 있다.

[a, b] = [b, a];
console.log(a, b);
