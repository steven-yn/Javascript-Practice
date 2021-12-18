// 05 함수

/*
function add(a, b) {
  return a + b;
}

const result = add(3, 4);
console.log(result);
*/

/*
function add(a, b) {
  return a + b;
  console.log("호출이 되지 않는 코드!");
}

const result = add(1, 4);
console.log(result);
*/

// 연습 Hello, name!

/*
function hello(name) {
  console.log("Hello, " + name + "!");
}

hello("velopert");
*/

// 템플릿 리터럴 사용

function hello(name) {
  console.log(`hello, ${name}!`);
}

hello("steven");

// 점수를 성적 등급으로 변환하기

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "C+";
  }
}

const grade = getGrade(90);
console.log(grade);

// 화살표 함수

/*
const add = (a, b) => {
  return a - b;
};

console.log(add(4, 2));
*/

const add = (a, b) => a - b;
console.log(add(4, 3));
