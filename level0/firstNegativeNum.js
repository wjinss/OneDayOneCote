// 첫 번째로 나오는 음수
// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 100
// -10 ≤ num_list의 원소 ≤ 100
// 입출력 예
// num_list	result
// [12, 4, 15, 46, 38, -2, 15]	5
// [13, 22, 53, 24, 15, 6]	-1
// 입출력 예 설명
// 입출력 예 #1

// 5번 인덱스에서 음수가 처음 등장하므로 5를 return합니다.
// 입출력 예 #2

// 음수가 없으므로 -1을 return합니다.

// > 너 findIndex메서드 아니?

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(num_list) {
  return num_list.findIndex((n) => n < 0);
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(num_list) {
    let result = -1;

    for (let i = 0; i < num_list.length; i++) {
      if (num_list[i] < 0) {
        result = num_list.indexOf(num_list[i]);
        break;
      }
    }
    return result;
  }
  // 반복문 사용
}
{
  function solution(num_list) {
    let a = num_list.filter((c) => {
      if (c < 0) return c;
    });
    return num_list.indexOf(a[0]);
  }
  // filter 사용
}
