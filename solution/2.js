function solution(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr;
}

console.log(solution([5, 2, 3, 1, 4, 4, 4, 4, 4, 4, 4]));
