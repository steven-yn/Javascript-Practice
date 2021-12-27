// 06 비구조화 할당 (구조분해) 문법

// 복습 : 객체 안의 값 추출 해서 바로 변수 혹은 상수로 선언하기.

/*
const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2


// 복습 : 함수의 파라미터

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
*/

const object = { a: 1 };

/*
function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
*/

// 비구조화 할당시 기본값 설정

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object); // 1 2

const { a, b = 2 } = object;

console.log(a);
console.log(b);

// 비구조화 할당시 이름 바꾸기

// 예시 코드

const animal = {
  name: "야옹이",
  type: "고양이",
};

/*
const nickname = animal.name;

console.log(nickname);
*/

const { name: nickname } = animal;
console.log(nickname);

// 배열 비구조화 할당

// 예시코드

/*
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);
*/

// 배열 비구조화 할당 기본값 설정

const array = [3];
const [thr, fv = 5] = array;

console.log(thr);
console.log(fv);

// 깊은 값 비구조화 할당

// 예시코드

const deepObject = {
  state: {
    information: {
      name: "yoonOcean",
      languages: ["korean", "english", "chinese"],
    },
  },
  value: 5,
};

// sol 1 비구조화 할당 여러번 사용하기

/*
const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value,
};


const extracted = {
  name: name,
  languages: languages,
  value: value,
};


console.log(extracted);
*/

// sol 2 비구조화 할당으로 한번에 모두 추출하기.

const {
  state: {
    information: { name, languages },
  },
  value,
} = deepObject;

const _extracted = {
  name,
  languages,
  value,
};

console.log(_extracted);
