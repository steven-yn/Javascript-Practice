// 08 JS 의 Scope 에 대한 이해

// 예시를 통한 Scope 이해

/*
const value = "hello!";

function myFunction() {
  console.log("myFunction: ");
  console.log(value);
}

function otherFunction() {
  console.log("otherFunction: ");
  const value = "bye!";
  console.log(value);
}

myFunction();
otherFunction();

console.log("global scope: ");
console.log(value);
*/

// 또다른 예시

/*
const value = "hello!";

function myFunction() {
  const value = "bye!";
  const anotherValue = "world";
  function functionInside() {
    console.log("functionInside: ");
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}

myFunction();
console.log("global scope: ");
console.log(value);
console.log(anotherValue);
*/

// 또또 다른 예시

/*
const value = "hello!";

function myFunction() {
  const value = "bye!";
  if (true) {
    const value = "world";
    console.log("block scope: ");
    console.log(value);
  }
  console.log("function scope: ");
  console.log(value);
}
myFunction();
console.log("global scope: ");
console.log(value);
*/

// var 의 경우

var value = "hello!";

function myFunction() {
  var value = "bye!";
  if (true) {
    var value = "world";
    console.log("block scope: ");
    console.log(value);
  }
  console.log("function scope: ");
  console.log(value);
}

myFunction();
console.log("global scope: ");
console.log(value);

// Hoisting 이해하기

yourFunction();

function yourFunction() {
  console.log("hello world!");
}

console.log(num);
var num = 2;

function fn() {
  console.log(a);
  let a = 2;
}
fn();
