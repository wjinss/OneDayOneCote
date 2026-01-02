// 자릿수 더하기
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 1234	10
// 930211	16
// 입출력 예 설명
// 입출력 예 #1

// 1 + 2 + 3 + 4 = 10을 return합니다.
// 입출력 예 #2

// 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(n) {
  return [...n.toString()].map((str) => +str).reduce((acc, cur) => acc + cur);
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(n) {
    return n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
  }
  // reduce내에서 Number 형변환
}

{
  function solution(n) {
    let result = 0;

    while (n > 0) {
      result += n % 10;

      n = Math.floor(n / 10);
    }

    return result;
  }
  // 반복문 사용
}
{
  function solution(n) {
    return (n + "")
      .split("")
      .map((v) => +v)
      .reduce((a, v) => a + v, 0);
  }

  // 숫자 n을 문자열로 바꾼 뒤, 한 글자씩 쪼개서 배열에 담는다
  // [...n.toString()]
  // n.toString().split("")
  // (n + "").split("")
  // [...(n + "")]
  // 슷자열에 + ''를 하면 문자열, 문자열에 +를 하면 숫자열로 변환
}
