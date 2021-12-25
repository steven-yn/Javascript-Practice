// 01 삼항 연산자

// 예시코드 (if)

const array = [];

/*
let text = "";
if (array.length === 0) {
  text = "배열이 비어있습니다.";
} else {
  text = "배열이 비어있지 않습니다.";
}

console.log(text);
*/

// 삼항연산자 적용

let text =
  array.length === 0 ? "배열이 비어있습니다" : "배열이 비어있지 않습니다.";

console.log(text);

// 삼항 연산자 중첩

const condition1 = false;
const condition2 = true;

const value = condition1 ? "와우!" : condition2 ? "블라블라" : "foo";

console.log(value);
