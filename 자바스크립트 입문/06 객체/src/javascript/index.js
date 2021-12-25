// 06 객체

const dog = {
  name: "멍멍이",
  age: 2,
};

console.log(dog.name);
console.log(dog.age);

const sample = {
  "key with space": true,
};

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

console.log(ironMan);
console.log(captainAmerica);

// 함수에서 객체를 파라미터로 받기

function print(hero) {
  const text = `
    ${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다
  `;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

// 객체 비구조화 할당 (객체 구조 분해)

function pprint(hhero) {
  const { alias, name, actor } = hhero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

pprint(ironMan);
pprint(captainAmerica);

// 파라미터 단계 객체 비구조화 할당

function printt({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

printt(ironMan);
printt(captainAmerica);

// 객체 안에 함수 넣기

const cat = {
  name: "야옹이",
  sound: "냐옹~",
  say: function () {
    console.log(this.sound);
  },
};

cat.say();

// Getter 함수와 Setter 함수

/*
const numbers = {
  a: 1,
  b: 2,
};

numbers.a = 5;
console.log(numbers);
*/

// Getter

const numberget = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행됩니다!");
    return this.a + this.b;
  },
};

console.log(numberget.sum);
numberget.b = 5;
console.log(numberget.sum);

// Setter

const numberset = {
  left: 0,
  right: 0,
  process: 0,
  calculate() {
    console.log("calculate");
    this.process = (this._a + this._b - 3) * 2;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다.");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("b가 바뀝니다.");
    this._b = value;
    this.calculate();
  },
};

console.log(numberset.process);
numberset.left = 5;
console.log(numberset.process);
numberset.right = 7;
console.log(numberset.process);
numberset.left = 9;
