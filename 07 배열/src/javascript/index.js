// 07 배열

// 숫자 배열

const array = [1, 2, 3, 4, 5];

// 객체 배열

const objects = [{ name: "야옹이" }, { name: "달미" }];

// 배열조회

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

// 배열에 새항목 추가하기 : push 함수

objects.push({
  name: "똥개",
});

console.log(objects);

// 배열의 크기 알아내기 : length 객체

console.log(objects.length);

objects.push({
  name: "몽몽이",
});

console.log(objects.length);
