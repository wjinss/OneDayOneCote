// 시저 암호
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(s, n) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerAtoz = [...alphabet];
  let upperAtoz = [...alphabet.toUpperCase()];
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else if (s[i] === s[i].toLowerCase()) {
      answer += lowerAtoz[(lowerAtoz.indexOf(s[i]) + n) % 26];
    } else if (s[i] === s[i].toUpperCase()) {
      answer += upperAtoz[(upperAtoz.indexOf(s[i]) + n) % 26];
    }
  }
  return answer;
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = "";

    for (let i = 0; i < s.length; i++) {
      let text = s[i];
      if (text == " ") {
        answer += " ";
        continue;
      }

      let textArr = upper.includes(text) ? upper : lower;
      let index = textArr.indexOf(text) + n;
      if (index >= textArr.length) index -= textArr.length;
      answer += textArr[index];
    }
    return answer;
  }
}

{
  // 아스키 코드 사용
  function solution(s, n) {
    return s.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
      let startCode = lowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0); // 기준점  설정 :  'a' = 97, 'A' = 65
      return String.fromCharCode(
        ((c.charCodeAt(0) - startCode + n) % 26) + startCode,
        // 1. c.charCodeAt(0) - startCode: 현재 문자의 숫자에서 기준점('a' 또는 'A')을 뺀다.
        // 예) : 'c'가 99라면 99 - 97 = 2. 즉, 'c'는 소문자 중 2번 인덱스

        // 2. + n: 문제에서 주어진 만큼 민다. (예: 2 + 3 = 5)

        // 3. % 26: 합이 26 이상이 되어도 나머지 연산을 튱해 0~25 사이의 숫자로 다시 돌아옴.
        // 예) : 'z'(25)에서 1을 더하면 26이 되지만, 26 \% 26 = 0이 되어 다시 'a'가 됨

        // 4. + startCode: 다시 원래의 아스키 코드로 변환. (5 + 97 = 102)

        // 5. String.fromCharCode(...): 계산된 숫자(102)를 다시 문자('f')로 변환
      );
    });
  }
}
