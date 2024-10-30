// 부동 소수점 다룰 때 입실론을 항상 기억하자.

console.log(Number.EPSILON); // 2.220446049250313e-16
const a = 0.1 + 0.1 + 0.1;
const b = 0.3;

console.log(a - b); // 5.551115123125783e-17

if (Math.abs(a - b) < Number.EPSILON) {
  console.log("a와 b는 같습니다.");
} else {
  console.log("a와 b는 다릅니다.");
}
