// 영어가 싫어요
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// numbers는 소문자로만 구성되어 있습니다.
// numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
// 1 ≤ numbers의 길이 ≤ 50
// "zero"는 numbers의 맨 앞에 올 수 없습니다.
// 입출력 예
// numbers	result
// "onetwothreefourfivesixseveneightnine"	123456789
// "onefourzerosixseven"	14067
// 입출력 예 설명
// 입출력 예 #1

// "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
// 입출력 예 #1

// "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.

// ------------------------------------------------------------------------------------------

// 나의 풀이

function solution(numbers) {
  const regex = /(one|two|three|four|five|six|seven|eight|nine|zero)/g;
  const answer = numbers.replace(regex, (match) => {
    switch (match) {
      case "one":
        return 1;
      case "two":
        return 2;
      case "three":
        return 3;
      case "four":
        return 4;
      case "five":
        return 5;
      case "six":
        return 6;
      case "seven":
        return 7;
      case "eight":
        return 8;
      case "nine":
        return 9;
      case "zero":
        return 0;
    }
  });
  return +answer;
}

// ------------------------------------------------------------------------------------------

// 다른 사람의 풀이

{
  function solution(numbers) {
    const obj = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    const num = numbers.replace(
      /zero|one|two|three|four|five|six|seven|eight|nine/g,
      (v) => {
        return obj[v];
      }
    );

    return Number(num);
  }
}
{
  function solution(numbers) {
    const number = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    for (let i = 0; i < number.length; i++) {
      numbers = numbers.split(number[i]).join(i);
    }
    return +numbers;
  }
}
{
  var solution = (n) =>
    Number(
      [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ].reduce((t, s, i) => t.replaceAll(s, i), n)
    );
}
{
  function solution(numbers) {
    let numStr = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    numStr.forEach((str, idx) => {
      numbers = numbers.replaceAll(str, idx);
    });
    return Number(numbers);
  }
}
{
  function solution(numbers) {
    var answer = 0;

    const words = {
      zero: "0",
      one: "1",
      two: "2",
      three: "3",
      four: "4",
      five: "5",
      six: "6",
      seven: "7",
      eight: "8",
      nine: "9",
    };

    for (const key in words) {
      numbers = numbers.split(key).join(words[key]);
    }

    return (answer = Number(numbers));
  }
  // 민지쓰 풀이
}
