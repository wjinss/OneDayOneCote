// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 입출력 예
// my_string	return
// "jaron"	"noraj"
// "bread"	"daerb"
// 입출력 예 설명
// 입출력 예 #1

// my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
// 입출력 예 #2

// my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

// ------------------------------------------------------------------------------------------

// 나의 풒이

function solution(my_string) {
  let answer = my_string.split("").reverse().join("");
  return answer;
}

solution("jaron");

// ------------------------------------------------------------------------------------------

// 다른 사람의 풒이
{
  // 문자열에 전개연산자를 사용하면 문자열을 개별 문자로 분해해 배열을 만든다
  function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
  }
}
{
  function solution(my_string) {
    return Array.from(my_string).reverse().join("");
  }
}
{
  function solution(my_string) {
    var my_stringArray = my_string.split(""); // 문자열을 배열로 변환
    var answerArray = [];
    for (var i = my_stringArray.length; i >= 0; i--) {
      // 배열의 길이만큼 뒤에서 부터 순환
      answerArray.push(my_stringArray[i]); // 문자열 배열의 뒷글자부터 새 배열에 뒤로 추가
    }
    var answer = answerArray.join(""); // 배열을 문자열로 합치기
    return answer;
  }
}
{
  function solution(my_string) {
    let answer = "";
    for (let i = my_string.length; i >= 0; i--) {
      answer += my_string.charAt(i);
    }
    return answer;
  }
}
