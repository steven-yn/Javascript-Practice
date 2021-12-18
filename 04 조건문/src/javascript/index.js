// 04 조건문

// if 문

/*
const a = 1;
if (a + 1 === 2) {
  console.log("a + 1 이 2 입니다.");
}
*/

/*
const a = 0;

if (a + 1 === 2) {
  console.log("a + 1 이 2 입니다."); // 아무것도 출력 안됨.
}
*/

/*
const a = 1;
if (true) {
  const a = 2;
  console.log("if 문 안의 a 값은" + a);
}
console.log("if 문 밖의 a 값은" + a);
*/

// if-else 문

/*
const a = 10;

if (a > 15) {
  console.log("a 가 15 큽니다");
} else {
  console.log("a 가 15보다 크지 않다.");
}
*/

// if-else if 문

/*
const a = 7;

if (a === 5) {
  console.log("5입니다!");
} else if (a === 10) {
  console.log("10입니다!");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}
*/

const device = "mac";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "ipad":
    console.log("아이패드!");
    break;
  case "galaxy note":
    console.log("갤럭시 노트!");
    break;
  default:
    console.log("모르겠네요...");
}
