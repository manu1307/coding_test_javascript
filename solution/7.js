// 출발점 + 도착점 4개로 이루어진 배열로 관리
// 현재 위치 다음 위치
// 방향, 범위 내 확인

function solution(dirs) {
  let answer = [];
  let start = [0, 0];

  // 상하좌우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const direction = { U: 0, D: 1, L: 2, R: 3 };

  for (let d of dirs) {
    let dirIdx = direction[d];
    let n_end = [start[0] + dx[dirIdx], start[1] + dy[dirIdx]];
    if (n_end[0] >= -5 && n_end[0] <= 5 && n_end[1] >= -5 && n_end[1] <= 5) {
      let ans1 = start.join("") + n_end.join("");
      let ans2 = n_end.join("") + start.join("");
      answer.push(ans1);
      answer.push(ans2);
      start = n_end;
    }
  }
  answer = [...new Set(answer)];

  return answer.length / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
