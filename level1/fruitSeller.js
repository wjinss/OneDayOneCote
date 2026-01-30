// 과일 장수
// 과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

// 한 상자에 사과를 m개씩 담아 포장합니다.
// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
// 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

// 예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

// (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ k ≤ 9
// 3 ≤ m ≤ 10
// 7 ≤ score의 길이 ≤ 1,000,000
// 1 ≤ score[i] ≤ k
// 이익이 발생하지 않는 경우에는 0을 return 해주세요.
// 입출력 예
// k	m	score	result
// 3	4	[1, 2, 3, 1, 2, 3, 1]	8
// 4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33
// 입출력 예 설명
// 입출력 예 #1

// 문제의 예시와 같습니다.
// 입출력 예 #2

// 다음과 같이 사과 상자를 포장하여 모두 팔면 최대 이익을 낼 수 있습니다.
// 사과 상자	가격
// [1, 1, 2]	1 x 3 = 3
// [2, 2, 2]	2 x 3 = 6
// [4, 4, 4]	4 x 3 = 12
// [4, 4, 4]	4 x 3 = 12
// 따라서 (1 x 3 x 1) + (2 x 3 x 1) + (4 x 3 x 2) = 33을 return합니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(k, m, score) {
  let sortedScore = score.sort((a, b) => b - a);
  let divisionScore = [];
  for (let i = 0; i < sortedScore.length; i += m) {
    divisionScore.push(sortedScore.slice(i, i + m));
  }
  let packedScore = divisionScore.filter((v) => v.length >= m);
  return packedScore.reduce((acc, cur) => acc + cur.at(-1) * m, 0);
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이
{
  function solution(k, m, score) {
    score.sort((a, b) => b - a);

    let answer = 0;

    for (let i = m - 1; i < score.length; i += m) {
      answer += score[i] * m;
    }

    return answer;
  }
  //i + m - 1 === 마지막 인덱스
}
{
  function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score
      .slice()
      .sort((a, b) => a - b)
      .slice(score.length % m); // 가장 낮은 점수의 사과(들) 버리기

    for (let i = 0; i < sortedScore.length; i += m) {
      answer += sortedScore[i] * m;
    }
    return answer;
  }
  // sortedScore를 오름차순으로 정렬
}
{
  // 가독성은 떨어지지만 참신한 방법
  solution = (_, m, s) =>
    s
      .sort()
      .filter((_, i) => !((s.length - i) % m))
      .reduce((a, v) => a + v, 0) * m;

  // (s.length - i)의 의미: "뒤에서부터 몇 번째?"
  // !((s.length - i) % m)의 의미
  // - m: 뒤에서부터의 순서를 m으로 나눈 나머지
  // - !: 그 나머지가 0일 때만 true (0은 false)
  // 뒤에서부터 순서를 세었을 때 m, 2m, 3m...번째에 위치한 요소들만 남긴다

  // [1,1,1,2,2,3,3]
  // i=0, s.length - i = 7 , (s.length - i) % 4 = 3
  // i=1, s.length - i = 6 , (s.length - i) % 4 = 2
  // i=2, s.length - i = 5 , (s.length - i) % 4 = 1
  // i=3, s.length - i = 4 , (s.length - i) % 4 = 0 V
  // i=4, s.length - i = 3 , (s.length - i) % 4 = 1
  // i=5, s.length - i = 2 , (s.length - i) % 4 = 2
  // i=6, s.length - i = 1 , (s.length - i) % 4 = 3
  // 2 * 4 = 8
}
