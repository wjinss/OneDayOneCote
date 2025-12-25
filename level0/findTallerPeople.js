// 머쓱이보다 키 큰 사람
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ height ≤ 200
// 1 ≤ array의 원소 ≤ 200
// 입출력 예
// array	height	result
// [149, 180, 192, 170]	167	3
// [180, 120, 140]	190	0
// 입출력 예 설명
// 입출력 예 #1

// 149, 180, 192, 170 중 머쓱이보다 키가 큰 사람은 180, 192, 170으로 세 명입니다.
// 입출력 예 #2

// 180, 120, 140 중 190보다 큰 수는 없으므로 0명입니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(array, height) {
  return array.filter((item) => item > height).length;
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이

{
  function solution(array, height) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > height) {
        answer++;
      }
    }
    return answer;
  }

  // 새 배열을 만들지 않고 기존 배열에서 반복문을 사용해 answer의 값을 올릴 수 있다.
}

{
  function solution(array, height) {
    let count = 0;

    for (const a of array) {
      if (a > height) count += 1;
    }

    return count;
  }
  // for...of사용
}

{
  function solution(array, height) {
    array.push(height);
    array.sort((a, b) => a - b);
    var answer = array.length - array.lastIndexOf(height) - 1;
    return answer;
  }

  // 매개변수 height를 배열에 넣고 오름차순으로 변경 후, 배열의 길이에서 height의 인덱스(-1)을 뺀 값
}

{
  function solution(array, height) {
    var answer = 0;
    array.forEach((v) => {
      if (v > height) answer++;
    });
    return answer;
  }
  // forEach를 사용해 새로운 배열을 추가하지 않고, 반복문처럼 사용
}
