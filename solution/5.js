// 1 4     3 3      1*3 + 4* 3  1*3 + 4*3
// 3 2     3 3      3*3 + 2* 3
// 4 1

// 곱한 행렬의 크기에 해당하는 2중 배열 선언
// 행렬 연산에서 배열에 넣어준다
function solution(arr1, arr2) {
  const answer = new Array(arr1.length)
    .fill(0)
    .map(() => new Array(arr2[0].length).fill(0));
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr1[0].length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ],
    [
      [22, 22, 11],
      [36, 28, 18],
      [29, 20, 14],
    ]
  )
);
