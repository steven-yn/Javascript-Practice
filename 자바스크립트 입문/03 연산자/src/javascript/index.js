/* 03 연산자 */

//01 산술연산자

let b = 1 + 2;

let a = 1 + 2 - (3 * 4) / 4;

let c = 1;

console.log(c++);
console.log(++c);

let d = 1;
d--;

console.log(d);

//02 대입 연산자

let e = 1;

e += 3;
// e = e + 3;
console.log(e);

let f = 1;

f += 3;
console.log(f);
f -= 3;
console.log(f);
f *= 3;
console.log(f);
f /= 3;
console.log(f);

// 03 논리 연산자

// NOT

const aa = !true;
console.log(aa);

// AND

const bb = true && true;
console.log(bb);

let cc = false && false;
console.log(cc);
cc = false && true;
console.log(cc);
cc = true && false;
console.log(cc);

// OR

let t = true || false;
console.log(t);
t = false || false;
console.log(t);

// 연산 순서

const value2 = !((true && false) || (true && false) || !false);
console.log(value2);

/*
    !((true && false) || (true && false) || true); < NOT 우선 처리
    !(false || false || true); < AND 처리
    !true; < OR 처리
    false;
*/

// 04 비교 연산자

// 두 값 일치? equal ===

const aaaa = 1;
const bbbb = 1;
const equals = aaaa === bbbb;
console.log(equals);

const a1 = 1;
const b1 = "1";
const equals1 = a1 == b1;
console.log(equals1); // true

const a2 = 0;
const b2 = false;
const equals2 = a2 == b2;
console.log(equals2); // true

const a3 = undefined;
const b3 = null;
const equals3 = a3 == b3;
console.log(equals3); //true

// 두 값 불일치? notEqual !==

const value4 = "a" !== "b";
console.log(value4);

// 크고작음

const aa1 = 10;
const bb1 = 15;
const cc1 = 15;

console.log(aa1 < bb1);
console.log(bb1 < cc1);

// 문자열 붙이기

const st = "하이하이";
const ring = "헬로우에브리원";
console.log(st + ring);
