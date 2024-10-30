// 모든 조합의 인덱스에 대해 더한 값을 배열에 넣어준다
// 오름차순으로 정렬한다

function solution(numbers) {
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => a - b);
  return uniqueArr;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
