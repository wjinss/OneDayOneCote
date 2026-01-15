// 핸드폰 번호 가리기
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

// ------------------------------------------------------------------------------------------

// 나의 풀이

{
  function solution(phone_number) {
    return [...phone_number]
      .map((v, i, arr) => (i >= arr.length - 4 ? v : "*"))
      .join("");
  }
}
{
  function solution(phone_number) {
    let answer = "";
    for (let i = 0; i <= phone_number.length - 1; i++) {
      i >= phone_number.length - 4
        ? (answer += phone_number[i])
        : (answer += "*");
    }
    return answer;
  }
}

// ------------------------------------------------------------------------------------------

// 나의 오답 노트

{
  function solution(phone_number) {
    return [...phone_number]
      .map((v) => (v === phone_number.at(-4) ? v : "*"))
      .join("");
  }
}
{
  function solution(phone_number) {
    let answer = "";

    for (let i = 0; i <= phone_number.length - 1; i++) {
      phone_number[i] === phone_number.at(-4)
        ? (answer += phone_number[i])
        : (answer += "*");
    }

    return answer;
  }
}

// phone_number.at(-4)로 인해 뒤에 4번째 요소의 값을 받아옴
// 하지만 뒤에서 4번째 인덱스를 받아야되기 때문에 .length - 4로 변경 후 기타 코드 수정

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이

{
  function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
  }
}

{
  function hide_numbers(s) {
    let result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
  }
}
{
  const solution = (n) => [...n].fill("*", 0, n.length - 4).join("");
}
{
  function hide_numbers(s) {
    let result = "";

    for (var i = 0; i < s.length; i++) {
      result += i < s.length - 4 ? "*" : s.charAt(i);
    }

    return result;
  }
}
