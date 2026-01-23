// 최대공약수와 최소공배수
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]
// 입출력 예 설명
// 입출력 예 #1
// 위의 설명과 같습니다.

// 입출력 예 #2
// 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(n, m) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (n * m) / gcd(n, m);
  return [gcd(n, m), lcm];
}
// 유클리드 호제법

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이

{
  function gcdlcm(a, b) {
    var r;
    // 1. 초기화: ab에 두 수의 곱을 미리 저장
    // 2. 조건: r = a % b (나머지가 0이 되면 종료)
    // 3. 증감식: 변수 교체 (a에는 b를, b에는 나머지 r을 대입)
    for (var ab = a * b; (r = a % b); a = b, b = r) {}
    return [b, ab / b];
  }
  // 유클리드 호제법 - for문 활용
  //   1. for 첫번째 인자는 루프에 들어가기 전 지정하는 값으로 a와 b가 변하기 전에 미리 최소공배수 구할 때 쓸 a * b를 선언해둠.
  // 2. 두 번째 인자는 루프 내에서 계속 초기화되며 true를 반환하는 동안 반복함. m % n이 0이 나오는 순간 false를 반환하여 세 번째 인자를 연산하지 않고 탈출.
  // 3. 세 번째 인자는 루프 내에서 반복해서 a, b를 바꿔서 유클리드 호제법을 연산해줌.
  // 4. ab를 미리 선언해두었기에 최소공배수를 구할 때 사용가능. 다만 지역변수를 쓸 수 있는 var의 특징이고 let, const로 선언해서 쓰려면 for문 이전에 미리 할당해줘야 함.
  // 5. function solution(a, b) {let r; const ab = a * b; while (r = a % b) {a = b, b = r;} return [b, ab/b];} 즉 이것과 동일한 내용의 코드임.
}

{
  function greatestCommonDivisor(a, b) {
    return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
  }
  function leastCommonMultipleOfTwo(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
  }
  function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
  }
}

{
  function gcdlcm(a, b) {
    var gcd = calc_gcd(a, b);
    var lcm = (a * b) / gcd;

    return [gcd, lcm];
  }

  function calc_gcd(a, b) {
    if (b == 0) return a;
    return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
  }
}

// ------------------------------------------------------------------------------------------

// 유클리드 호제법

// - 최대공약수(GCD): 두 수 a, b에 대해 a를 b로 나눈 나머지를 r이라고 하면,
// GCD(a, b) = GCD(b, r) 이 과정을 나머지가 0이 될 때까지 반복하면 그때의 나누는 수가 최대공약수

// - 최소공배수(LCM): 두 수의 곱을 최대공약수로 나누면 최소공배수가 나옴

// 3. 코드의 흐름 따라가기 (예: a=12, b=18) by.제미나이
// 초기값: ab = 12 * 18 = 216

// 첫 번째 반복:

// r = 12 % 18 = 12 (조건문이 12이므로 true로 간주되어 실행)

// a = 18, b = 12로 변경

// 두 번째 반복:

// r = 18 % 12 = 6 (조건문이 6이므로 true)

// a = 12, b = 6으로 변경

// 세 번째 반복:

// r = 12 % 6 = 0 (조건문이 0이므로 false가 되어 루프 종료)

// 결과 반환:

// b (최대공약수): 6

// ab / b (216 / 6): 36 (최소공배수)

// 반환값: [6, 36]
