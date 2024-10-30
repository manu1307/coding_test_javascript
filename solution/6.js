// 각 단계별로 실패한 사람의 수를 구한다
// 순회하면서 실패한 사람 / 남은 사람의 결과를 배열에 저장한다
// 결과 값을 내림차순으로 정렬

function solution(N, stages) {
  const fail = Array(N + 1).fill(0);
  const failureRateArr = [];
  let people = stages.length;

  stages.forEach((stage) => {
    fail[stage - 1] += 1;
  });

  for (let i = 0; i < N; i++) {
    const failureRate = people > 0 ? fail[i] / people : 0;
    failureRateArr.push([i + 1, failureRate]);
    people -= fail[i];
  }

  failureRateArr.sort((a, b) => b[1] - a[1]);

  return failureRateArr.map((e) => e[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4]));
