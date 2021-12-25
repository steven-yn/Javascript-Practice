/* quiz

숫자 배열이 주어졌을때 10보다 큰 숫자의 갯수를 반환하는 함수.
function countBiggerThanTen(numbers) {
  // 구현해보세요 
}

10 보다 큰 배열로 잘라내기 -> filter 또는 splice
filter를 쓰자.

갯수는 .length 로 반환

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
*/

/*

// sol 1
const countBiggerThanTen = (numbers) => {
  const largerThen10 = numbers.filter((nums) => nums > 10);
  return largerThen10.length;
};

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

*/

// sol 2

const countBiggerThanTen = (numbers) => {
  const index = numbers.indexOf(10);
  const largerThen10 = numbers.splice(index, numbers.length - 1);
  largerThen10.shift();
  return largerThen10.length;
};

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

/*

best sols

function countBiggerThanTen(numbers) {

  let count = 0;
  numbers.forEach(n => {
    if (n > 10) {
      count++;
    }
  });
  return count;
}

function countBiggerThanTen(numbers) {
  return numbers.filter(n => n > 10).length;
}

function countBiggerThanTen(numbers) {
  return numbers.reduce((acc, current) => {
    if (current > 10) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}


*/
