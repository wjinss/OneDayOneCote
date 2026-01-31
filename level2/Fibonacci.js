// 피보나치 수
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// n은 2 이상 100,000 이하인 자연수입니다.
// 입출력 예
// n	return
// 3	2
// 5	5
// 입출력 예 설명
// 피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

// 베얄
{
  function solution(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
      answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
    }
    return answer[n];
  }
}

// 반복문
{
  function solution(n) {
    let answer = 0;
    let prev = 0;
    let cur = 1;

    for (let i = 2; i <= n; i++) {
      answer = (prev + cur) % 1234567;
      prev = cur;
      cur = answer;
    }
    return answer;
  }
}

// ------------------------------------------------------------------------------------------

// 나의 오답 노트
{
  function solution(n) {
    let answer = 0;
    let prev = 0;
    let cur = 1;

    for (let i = 2; i <= n; i++) {
      prev = cur;
      cur = answer;
      answer += prev + cur;
      // answer는 이전의 prev랑 cur의 합인데, 최신화되고 더해져서 오류남
      // +=는 누적이라서 이전 answer의 값이 다 더해짐
      // > 논리적 오류
    }

    return answer;
  }
}
{
  function solution(n) {
    let answer = [0, 1];

    for (let i = 2; i <= n; i++) {
      answer[i] = answer[i - 1] + answer[i - 2];
    }

    return answer[n];
  }
}
// 두 오답의 공통점은 값에 % 1234567를 하지 않은 점
// js의 안전한 정수(.MAX_SAFE_INTEGER)에서 계산하기 위해 사용되는 것

{
  function solution(n) {
    const Fibonacci = (n) =>
      n === 0 ? 0 : n === 1 ? 1 : Fibonacci(n - 1) + Fibonacci(n - 2);

    return Fibonacci(n);
  }
  // Maximum call stack size exceeded => 재귀함수 계속 호출해서 메모리 부족 에러
}
{
  // 메모이제이션 활용
  function solution(n) {
    const memo = [0, 1];

    const Fibonacci = (n) => {
      if (n in memo) {
        return memo[n];
      } else {
        let result = Fibonacci(n - 1) + Fibonacci(n - 2);
        memo[n] = result;
        return result;
      }
    };

    return Fibonacci(n);
  }
  // n이 엄청 큰수이면 n ~ 1 까지의 깊이가 길어짐
  // top-down의 문제점
  // for문으로 bottom-up이 났다
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(n) {
    let result = [0, 1];
    while (result.length !== n + 1) {
      let fibonacci =
        (result[result.length - 2] + result[result.length - 1]) % 1234567;
      result.push(fibonacci);
    }
    return result[n];
  }
  // 반복문 대신 while
}
