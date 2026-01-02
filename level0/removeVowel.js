// 모음 제거
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// 입출력 예
// my_string	result
// "bus"	"bs"
// "nice to meet you"	"nc t mt y"
// 입출력 예 설명
// 입출력 예 #1

// "bus"에서 모음 u를 제거한 "bs"를 return합니다.
// 입출력 예 #1

// "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(my_string) {
  return my_string
    .replaceAll("a", "")
    .replaceAll("e", "")
    .replaceAll("i", "")
    .replaceAll("o", "")
    .replaceAll("u", "");
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(my_string) {
    return my_string.replace(/[aeiou]/g, "");
  }
  // 정규표현식을 사용해 replace로 한번에 설정 가능
}

{
  function solution(my_string) {
    return Array.from(my_string)
      .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
      .join("");
  }
  // 배열메서드 사용하는 법
}
{
  function solution(my_string) {
    var answer = my_string.split("");
    for (let i = 0; i < answer.length; i++) {
      switch (answer[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          answer.splice(i, 1);
          i--;
          break;
      }
    }

    return answer.join("");
  }
  // 반복 + 조건
}
{
  function solution(my_string) {
    let answer = "";
    let alpa = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < my_string.length; i++) {
      if (!alpa.includes(my_string[i])) {
        answer += my_string[i];
      }
    }
    return answer;
  }
  // 반복 + 조건 다른 방법
}
