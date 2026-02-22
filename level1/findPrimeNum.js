// 소수 찾기
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(n) {
  // 0부터 n까지의 인덱스를 가진 배열 생성 (모두 true)
  const prime = new Array(n + 1).fill(true);
  prime[0] = prime[1] = false; // 0과 1은 소수가 아님

  // n의 제곱근까지만 확인
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i]) {
      // i가 소수라면, i의 배수들을 모두 false로 변경
      for (let j = i * i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }

  // true인 개수만 필터링하여 반환
  return prime.filter(Boolean).length;
}

// ------------------------------------------------------------------------------------------

// 나의 오답 노트

// 반복문에서 함수를 매번 호출해 오버헤드가 발생
{
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }

    return true;
  }

  function solution(n) {
    let answer = 0;

    for (let i = 2; i <= n; i++) {
      isPrime(i) ? answer++ : answer;
    }

    return answer;
  }
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이

{
  function solution(n) {
    const s = new Set();
    for (let i = 1; i <= n; i += 2) {
      s.add(i);
    }
    // 홀수만 우선으로 담기
    s.delete(1);
    s.add(2); // 홀수 중 1을 제거 및 짝수인 2를 수동으로 추가
    for (let j = 3; j < Math.sqrt(n); j++) {
      if (s.has(j)) {
        for (let k = j * 2; k <= n; k += j) {
          s.delete(k);
          //소수가 아닌 수를 제거
        }
      }
    }
    return s.size;
  }
  // 자료구조의 특성 때문에 메모리 오버헤드가 생길 수 있음
}
{
  function solution(n) {
    if (n < 2) return 0;

    const isPrime = new Uint8Array(n + 1).fill(1);
    isPrime[0] = isPrime[1] = 0;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = 0;
        }
      }
    }

    return isPrime.reduce((acc, cur) => acc + cur, 0);
  }
}
{
  function solution(n) {
    if (n == 2) return 1;
    let i, j;
    let primes = [0, 0];
    for (i = 2; i <= n; i++) primes[i] = 1;
    for (i = 2; i <= n; i++) {
      if (!primes[i]) continue;
      for (j = i * 2; j <= n; j += i) primes[j] = 0;
    }
    return primes.reduce((acc, cur) => acc + cur);
  }
}
