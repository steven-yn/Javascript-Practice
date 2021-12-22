// 09 배열 내장함수

// forEach

const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

/*
for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}
*/

superheroes.forEach((hero) => {
  console.log(hero);
});

// map

const array = [1, 2, 3, 4, 5, 6, 7, 8];

/* for
const squared = [];

for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);

// forEach

array.forEach((n) => {
  squared.push(n * n);
});

console.log(squared);
*/

/* map
const square = (n) => n * n;

const squared = array.map(square);

console.log(squared);
*/

const squared = array.map((n) => n * n);
console.log(squared);

// indexOf

const index = superheroes.indexOf("토르");
console.log(index);

// findIndex

const todos = [
  {
    id: 1,
    text: "오션스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const _index = todos.findIndex((todo) => todo.id === 3);
console.log(_index);

//find

const todo = todos.find((todo) => todo.done === true);
console.log(todo);

// filter

const tasksNotDone = todos.filter((todo) => todo.done === false);
// const tasksNotDone = todos.filter((todo) => !todo.done);
console.log(tasksNotDone);

// Splice

const numbers = [10, 20, 30, 40];

const __index = numbers.indexOf(30);
numbers.splice(__index, 1);
console.log(numbers);

// slice

const _numbers = [10, 20, 30, 40];
const sliced = _numbers.slice(0, 2);

console.log(sliced);
console.log(_numbers);

// shift 와 pop

const ages = [22, 25, 28, 31];
const svalue = ages.shift();
console.log(svalue);
console.log(ages);

const pvalue = ages.pop();
console.log(pvalue);
console.log(ages);

// unshift

ages.unshift(19);
console.log(ages);

// concat

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);

// join

const _array = [1, 2, 3, 4, 5];
console.log(_array.join());
console.log(_array.join(" "));
console.log(_array.join(", "));

// reduce

/*
const nums = [1, 2, 3, 4, 5];

let sums = 0;
nums.forEach((n) => {
  sums += n;
});

console.log(sums);
*/

const nums = [1, 2, 3, 4, 5];
let sums = nums.reduce((accml, curnt) => accml + curnt, 0);

console.log(sums);

let _sums = nums.reduce((accml, curnt) => {
  console.log({ accml, curnt });
  return accml + curnt;
}, 0);

console.log(_sums);

let avrg = nums.reduce((accml, curnt, index, array) => {
  if (index === array.length - 1) {
    return (accml + curnt) / array.length;
  }
  return accml + curnt;
}, 0);

console.log(avrg);
