// 03 단축 평가 (short-circuit evaluation) 논리 계산법

// 예시 코드 : getName 파라미터로 제대로된 객체가 없을때

const cat = {
  name: "달미",
};

/*
function getName(animal) {
  return animal.name;
}

const name = getName(cat);

console.log(name); // 달미
*/

// 원시적인 해결방법

/*
function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);
*/

// && 연산자로 단축

function getName(animal) {
  return animal && animal.name;
}

const name = getName(cat);
console.log(name);

/*
console.log(true && "hello");
console.log(false && "hello");
console.log("hello" && "bye");
console.log(null && "hello");
console.log(undefined && "hello");
console.log("" && "hello");
console.log(0 && "hello");
console.log(1 && "hello");
console.log(1 && 2);
*/

// 예시 코드

const namelessCat = {
  name: "",
};

/*
function _getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return "이름이 없는 동물 입니다.";
  }
  return name;
}

const _name = _getName(namelessCat);
console.log(_name);
*/

// || 연산자로 단축

function _getName(animal) {
  const name = animal && animal.name;
  return name || "이름이 없는 동물입니다.";
}

const _name = _getName(namelessCat);
console.log(_name);
