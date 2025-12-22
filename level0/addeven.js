// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

// 입출력 예
// n	result
// 10	30
// 4	6
// 입출력 예 설명
// 입출력 예 #1

// n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
// 입출력 예 #2

// n이 4이므로 2 + 4 = 6을 return 합니다.

// ------------------------------------------------------------------------------------------

// 나의 풒이
function solution(n) {
  let value = 0;
  let evenNumberArray = [];

  for (i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      evenNumberArray.push(i);
    }
  }

  const answer = evenNumberArray.reduce((acc, cur) => acc + cur, value);
  return answer;
}

solution(10);
solution(4);

// ------------------------------------------------------------------------------------------

// 다른 사람의 풒이
{
  // 등차수열의 합 공식(가우스의 덧셈)
  // 1부터 n까지의 연속된 자연수의 합을 구하는 간단한 방법으로,
  // 첫 수와 끝 수를 더하고(n+1), 쌍을 이룬 횟수(n/2)를 곱해 2로 나누는 방식
  // 해당 풀이에선 Math.floor(n / 2)로 연속된 자연수가 아닌, 짝수의 합만 구하는 방식으로 구현
  function solution(n) {
    var half = Math.floor(n / 2);
    return half * (half + 1);
  }
}

// ------------------------
// 굳이 배열을 안쓰고, 반복문을 사용해 변수를 최산화해서 풀면 더 간단
{
  function solution(n) {
    var answer = 0;

    for (let i = 2; i <= n; i += 2) answer += i;

    return answer;
  }
}
{
  function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i += 2) {
      answer += i;
    }
    return answer;
  }
}
{
  function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        answer += i;
      }
    }
    return answer;
  }
}
