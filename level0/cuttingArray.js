// 배열 자르기
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이
// 입출력 예
// numbers	num1	num2	result
// [1, 2, 3, 4, 5]	1	3	[2, 3, 4]
// [1, 3, 5]	1	2	[3, 5]
// 입출력 예 설명
// 입출력 예 #1

// [1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.
// 입출력 예 #2

// [1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// ------------------------------------------------------------------------------------------

// 나의 오답 노트

{
  function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2);
  }
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이

{
  function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2 - num1 + 1);
  }

  // splice 함수는 첫 번째 인자로 시작 인덱스를 받고, 두 번째 인자로는 몇 개를 삭제할 건지를 받는다.
  // 그냥 (num1, num2)를 하게 되면 num1번째 인덱스부터 시작해서 num2"개"를 제거하게 된다.(num2번째 인덱스까지가 아니라).
  // 하지만 문제에서 주어진 num1과 num2는 모두 인덱스값이기 때문에 제거하길 원하는 개수를 받아오려면 num2-num1+1을 해줘야한다.
}

{
  function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i < num2 + 1; i++) {
      answer.push(numbers[i]);
    }

    return answer;
  }
  // 반복문 사용
}

{
  function solution(numbers, num1, num2) {
    return numbers.filter((n, i) => num1 <= i && i <= num2);
  }
  // filter() 사용
}

// ------------------------------------------------------------------------------------------

// slice()와 splice()의 차이

// slice([begin[, end]])
// 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환.
// 원본 배열은 바뀌지 않는다.

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// splice() 메서드는 start부터 deleteCount개수의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
// start가 음수이면 배열의 끝에서부터 요소를 세며, 값이 배열의 길이보다 크면 0으로 설정
// deleteCount는 제거할 요소의 수이며, 생략하거나 array.length - start보다 값이 크면 start부터 모든 요소를 제거, 0이하면 요소 제거 x
// item1[, item2[, ...]]]는 배열에 추가할 요소이며, 없으면 요소를 제거하기만 한다.
