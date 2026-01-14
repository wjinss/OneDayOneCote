// 약수의 합
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) {
      answer.push(i);
    }
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) sum += i;
    }
    return sum;
  }
}
{
  function solution(n) {
    let answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++) {
      if (!(n % i)) {
        answer += i + n / i;
      }
    }
    i--; // 반복문을 나올때 i가 Math.sqrt(n)보다 1 커진 상태라 --로 1을 빼줌
    return i === n / i ? answer - i : answer; // 제곱근이 중복으로 더해졌는지 확인
    // n = 16일 경우 answer += i + n / i => 4 + 16/4 즉, 4 + 4를 수행하기에, 중복으로 더해진 4(i)를 빼줌
  }
}
