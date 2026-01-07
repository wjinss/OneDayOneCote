// 문자 반복 출력하기
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ my_string 길이 ≤ 5
// 2 ≤ n ≤ 10
// "my_string"은 영어 대소문자로 이루어져 있습니다.
// 입출력 예
// my_string	n	result
// "hello"	3	"hhheeellllllooo"
// 입출력 예 설명
// 입출력 예 #1

// "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(my_string, n) {
  return [...my_string].reduce((acc, cur) => acc + cur.repeat(n), "");
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이

{
  function solution(my_string, n) {
    let answer = [...my_string].map((v) => v.repeat(n)).join("");
    return answer;
  }
}
{
  function solution(my_string, n) {
    let ans = "";
    for (let s of my_string) ans += s.repeat(n);
    return ans;
  }
}
{
  function solution(my_string, n) {
    let answer = "";

    for (let i = 0; i < my_string.length; i++) {
      for (let j = 0; j < n; j++) {
        answer += my_string[i];
      }
    }
    return answer;
  }
}
