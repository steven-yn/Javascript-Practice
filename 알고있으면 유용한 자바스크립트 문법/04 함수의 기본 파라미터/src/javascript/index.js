// 04 함수의 기본 파라미터

// 원의 넓이를 구하는 함수

/*
function calculator(r) {
  return Math.PI * r * r; // Math.PI = 원주율 파이
}


const area = calculator(4); // 50.xxxxx
console.log(area);


const area = calculator(); // NaN
console.log(area);
*/

// ES5 이전

/*
function calculator(r) {
  const radius = r || 1;
  return Math.PI * radius * radius; // Math.PI = 원주율 파이
}

const area = calculator(); // 3.14159xxxx
console.log(area);
*/

// ES6 이후

function calculator(r = 1) {
  return Math.PI * r * r; // Math.PI = 원주율 파이
}

const area = calculator(); // 3.14159xxxx
console.log(area);
