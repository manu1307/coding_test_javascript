// 각자의 찍는 방식을 저장한다₩₩
// 정답을 반복문으로 돌면서 해당하는 찍은 정답과 비교한다₩
function solution(answers) {
  const answerType = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const answer = [0, 0, 0];
  for (const index in answers) {
    for (let i in answerType) {
      if (answers[index] === answerType[i][index % answerType[i].length]) {
        answer[i] += 1;
      }
    }
  }
  const maxAnswer = Math.max(...answer);
  const temp = [];
  answer.forEach((a, i) => {
    if (a === maxAnswer) temp.push(i + 1);
  });

  return temp;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
