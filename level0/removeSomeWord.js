// 특정 문자 제거하기
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// letter은 길이가 1인 영문자입니다.
// my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
// 대문자와 소문자를 구분합니다.
// 입출력 예
// my_string	letter	result
// "abcdef"	"f"	"abcde"
// "BCBdbe"	"B"	"Cdbe"
// 입출력 예 설명
// 입출력 예 #1

// "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.
// 입출력 예 #2

// "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(my_string, letter) {
  let answer = [...my_string].filter((str) => str !== letter).join("");
  return answer;
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(my_string, letter) {
    const answer = my_string.split(letter).join("");
    return answer;
    // String.split() : 매게변수로 받은 값을 통해 기존 문자열을 나눈 후 배열로 변경 > 그 후 join으로 문자열 표현
    // solution("abcdef","f")은 "abcdef"에서 'f'를 분리한다는 뜻
  }
}

{
  function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
    //String.replaceAll() : 첫 번째 매개변수를 두 번째 매개변수로 바꾼 새 문자열을 반환
    // solution("abcdef","f")은 "abcdef"에서 'f'를 빈 문자열로 변경한다는 뜻
  }
}

{
  function solution(my_string, letter) {
    let str = "";
    const arr = my_string.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== letter) str += arr[i];
    }
    return str;
  }
  // 반복문을 사용한 방법
}
