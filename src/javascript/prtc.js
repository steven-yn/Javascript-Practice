// practice
// numbers 라는 배열을 파라미터로 받아서
// 총합을 구하는 함수를 만들어봅시다.

/*
const arraySum = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

const result = arraySum([10, 20, 30, 40, 50]);
console.log(result);
*/

// 숫자로 이루어진 배열이 주어졌을 때,
// 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진
// 배열을 새로 만들어서 반환해보세요.

function biggerThanThree(numbers) {
  /* 구현해보세요 */
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

export default biggerThanThree;
