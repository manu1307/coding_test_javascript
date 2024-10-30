function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([5, 2, 3, 1, 4])); // [1, 2, 3, 4, 5]