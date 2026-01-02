// 짝수 홀수 개수
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000
// 입출력 예
// num_list	result
// [1, 2, 3, 4, 5]	[2, 3]
// [1, 3, 5, 7]	[0, 4]
// 입출력 예 설명
// 입출력 예 #1

// [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.
// 입출력 예 #2

// [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(num_list) {
  let evenNumber = num_list.filter((i) => i % 2 === 0).length;
  let oddNumber = num_list.length - evenNumber;
  return [evenNumber, oddNumber];
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(num_list) {
    var answer = [0, 0];

    for (let a of num_list) {
      answer[a % 2] += 1;
    }

    return answer;
  }

  // answer[a % 2] += 1; 는 아래처럼 풀어쓸 수 있다.

  // if (a % 2 === 0) {
  //   answer[0] += 1; // 짝수면 0번 방 증가
  // } else {
  //   answer[1] += 1; // 홀수면 1번 방 증가
  // }
}
{
  function solution(num_list) {
    return [
      num_list.filter((num) => num % 2 === 0).length,
      num_list.filter((num) => num % 2 === 1).length,
    ];
  }
  // filter사용 + 바로 리턴값 반환하기
}

{
  function solution(list) {
    return list.reduce(
      (acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc),
      [0, 0]
    );
  }
  // reduce사용
}

{
  function solution(num_list) {
    var answer = [0, 0];

    for (let i = 0; i < num_list.length; i++) {
      if (num_list[i] % 2 == 0) answer[0]++;
      else answer[1]++;
    }

    return answer;
  }
  // 반복문 사용
}
