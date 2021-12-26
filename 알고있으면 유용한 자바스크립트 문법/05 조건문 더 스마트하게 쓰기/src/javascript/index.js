// 05 조건문 더 스마트하게 쓰기

// 특정 한 하나의 값이 여러 값중 하나인지 확인해야 할때

/*
function isAnimal(text) {
  return text === "고양이" || text === "강아지" || text === "거북이";
}

console.log(isAnimal("강아지"));
console.log(isAnimal("노트북"));
*/

// 리팩토링

/*
function isAnimal(name) {
  const animals = ["고양이", "강아지", "거북이", "너구리"];
  return animals.includes(name);
}

console.log(isAnimal("강아지"));
console.log(isAnimal("노트북"));
*/

// 화살표형 리팩토링

const isAnimal = (name) =>
  ["고양이", "강아지", "거북이", "너구리"].includes(name);

console.log(isAnimal("강아지"));
console.log(isAnimal("노트북"));

// 값에 따라 다른 결과물을 반환해야 할때

/*
function getSound(animal) {
  if (animal === "강아지") return "멍멍!";
  if (animal === "고양이") return "야옹~";
  if (animal === "참새") return "쨲쨲!";
  if (animal === "비둘기") return "국ㄱ구국국ㄱㄱ구ㅜ!";
  return "....?";
}

console.log(getSound("강아지"));
console.log(getSound("비둘기"));
console.log(getSound("캥거루"));
*/

// switch 형

/*
function getSound(animal) {
  switch (animal) {
    case '개':
      return '멍멍!';
    case '고양이':
      return '야옹~';
    case '참새':
      return '짹짹';
    case '비둘기':
      return '구구 구 구';
    default:
      return '...?';
  }
}

console.log(getSound("강아지"));
console.log(getSound("비둘기"));
console.log(getSound("캥거루"));
*/

// 리팩토링
/*
function getSound(animal) {
  const sounds = {
    강아지: "멍멍!",
    고양이: "야옹~",
    참새: "쨲쨲!",
    비둘기: "국구구구ㅜ구구구국ㄱ구ㅜㅜㄱ",
  };
  return sounds[animal] || "..?";
}

console.log(getSound("강아지"));
console.log(getSound("비둘기"));
console.log(getSound("캥거루"));
*/
// 값에 따라 실행해야 하는 코드 구문이 다를 때

function makeSound(animal) {
  const tasks = {
    강아지() {
      console.log("멍멍");
    },
    고양이() {
      console.log("야옹");
    },
    비둘기() {
      console.log("국ㄱ구구국구ㅜㅜ국국국구ㅜ국");
    },
  };
  if (!tasks[animal]) {
    console.log("아옳ㅇㅎ올옹ㅎ호롤ㄹ롤ㄹ");
    return;
  }
  tasks[animal]();
}

makeSound("고양이");
makeSound("고영희");
makeSound("비둘기");
