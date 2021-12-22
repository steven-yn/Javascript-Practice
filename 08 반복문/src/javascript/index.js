// 08 반복문

// for ++

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for --

for (let j = 10; j > 0; j--) {
  console.log(j);
}

// 배열과 for

const names = ["멍멍이", "야옹이", "달미"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let k = names.length - 1; k > -1; k--) {
  console.log(names[k]);
}

// While

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// for...of

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

// for...in

const cat = {
  name: "달미",
  sound: "아르르릉?",
  age: 0.9,
};

console.log(Object.entries(cat));
console.log(Object.keys(cat));
console.log(Object.values(cat));

for (let key in cat) {
  console.log(`${key}: ${cat[key]}`);
}

// break 와 continue

for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  console.log(i);
  if (i === 5) break;
}
