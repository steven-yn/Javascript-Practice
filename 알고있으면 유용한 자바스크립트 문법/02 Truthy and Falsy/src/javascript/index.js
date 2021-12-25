// 02 Truthy and Falsy

// 예시 코드

/*
function print(person) {
  console.log(person.name);
}

const person = {
  name: "John",
};

print(person);
*/

// print 함수가 파라미터가 비어진 채로 실행 된다면?

/*
function print(person) {
  if (person === undefined) {
    console.log("person 이 없네요");
    return;
  }
  console.log(person.name);
}

const person = {
  name: "John",
};

print();
*/

// null 값은 undefined 조건에 없으므로 다시 조건을 추가함.

/*
function print(person) {
  if (person === undefined || person === null) {
    console.log("person 이 없네요");
    return;
  }
  console.log(person.name);
}

const person = null;

print(person);
*/

function print(person) {
  if (!person) {
    console.log("person 이 없네요");
    return;
  }
  console.log(person.name);
}

const person = undefined;

print(person);

// Falsy 한 값들

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);
/* 모두 true임 */

//parseInt()

const num = parseInt("15", 10);
console.log(num);
const notnum = parseInt("야호~", 10);
console.log(notnum);

// Truthy 한 값들

console.log(!3);
console.log(!"hello");
console.log(!["array?"]);
console.log(![]);
console.log(!{ value: 1 });
/* 모두 false */

const value = { a: 1 };
if (value) {
  console.log("value가 Truthy 하네요");
}

// 특정값이 Truthy 한 값이면 true, 그렇지 않으면 false 값 표현?

// const Truthy = value ? true : false;
const Truthy = !!value;

console.log(Truthy);
